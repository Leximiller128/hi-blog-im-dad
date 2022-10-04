//require express
const router = require('express').Router();
const session = require('express-session');
const { User } = require('../models');
const withAuth = require('../utils/auth');

// currently at "/"
router.get('/', (req, res) => {
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

//module.exports
module.exports = router;

