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
  try {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  } catch (error) {
    res.status(505).json(err)
  }
});
  
router.get('/signup', (req, res) => {
  console.log("hellooooo")
  console.log("i am being rendered!!!")
    try {
      if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
      res.render('signUp');
    } catch (error) {
      res.status(505).json(err)
    }
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

