//require express
const router = require('express').Router();
const session = require('express-session');
const { User } = require('../models/');

router.get('/', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(501).json(err);
  }
})

router.get('/signup', async (req, res) => {
  try {
    res.render('signUp');
  } catch (err) {
    res.status(501).json(err);
  }
})

router.get('/home-page', async (req, res) => {
  try {
    res.render('dashboard');
  } catch (err) {
    res.status(501).json(err);
  }
})

router.get('/post-joke', async (req, res) => {
  try {
    res.render('makePost');
  } catch (err) {
    res.status(501).json(err);
  }
})

router.post('/', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'No user account found!' });
  }
});

//module.exports
module.exports = router;

