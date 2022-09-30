//require express
const router = require('express').Router();
const apiRputes = require('./api');
const loginRoutes = require('./login-routes');

router.use('/', loginRoutes);
router.use('/api', apiRputes);

//module.exports
module.exports = router;

