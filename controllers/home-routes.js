const router = require('express').Router();
const { Post, User} = require('../models/');
const withAuth = require('../utils/auth');


//renders users profile and posts
router.get('/profile', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });

    console.log(postData)

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('profile', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

//brings new post page for user
router.get('/new', withAuth, (req, res) => {
  res.render('makePost')
});

module.exports = router;
