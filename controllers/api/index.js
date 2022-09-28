//require express
const router = require('express').Router();
const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes');
const comments = require('./comment');

router.use('./users', userRoutes);
router.use('./posts', postRoutes);
router.use('./reactions', comments);

//module.exports
module.exports = router;

