const router = require('express').Router();
const { Post, User} = require('../models/');
const withAuth = require('../utils/auth');

//currently at /dashboard/

//renders users profile and posts
router.get('/profile/:id', async (req, res) => {
  console.log("hello")
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
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('singlePost', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//brings new post page for user
router.get('/new', withAuth, (req, res) => {
  res.render('makePost')
});

module.exports = router;
