//require express
const router = require('express').Router();
const { Post, Comment, User } = require('../models/');
const withAuth = require('../utils/auth');


// currently at "/"
//renders when you FIRST login(your dashboard)
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
  });
      
  const posts = postData.map((post) => post.get({ plain: true }));

  console.log(posts);

      
  
  res.render('dashboard', { 
    posts,
    username: req.session
  });
  } catch (err) {
    res.status(404).json(err);
  }
});


//rendering login and sign up pages for users
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});
  
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

//module.exports
module.exports = router;

