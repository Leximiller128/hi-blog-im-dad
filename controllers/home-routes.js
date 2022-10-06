const router = require('express').Router();
const { Post, User} = require('../models/');
const withAuth = require('../utils/auth');

//currently at /dashboard/

//renders users profile and posts
router.get('/profile/:id', async (req, res) => {
  try {
    const post = await Post.findAll({
      where: {
        user_id: req.params.id,
      },
    });
    
    const posts = post.map((data) => data.get({ plain: true }));
    console.log(posts)
    res.render('profile', {
      posts,
      username: req.session,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a SINGLE post
router.get('/post/:userid/:id', async (req, res) => {
  console.log(req.session)
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });
      console.log(post)

      res.render('singlePost', {
        post,
        username: req.session
      });
    } else {
      res.status(405).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:userid/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });
      console.log(post)

      res.render('userPost', {
        post,
        username: req.session
      });
    } else {
      res.status(405).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//brings new post page for user
router.get('/new', withAuth, (req, res) => {
  res.render('makePost', {
    username: req.session,
  })
});

module.exports = router;
