//require express
const router = require('express').Router();
const apiRputes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/api', apiRputes);

//module.exports
module.exports = router;

