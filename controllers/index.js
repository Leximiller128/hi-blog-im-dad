//require express
const router = require('express').Router();
const apiRputes = require('./api');
const loginRoutes = require('./login-routes');
const dashboardRoutes = require('./home-routes');

router.use('/', loginRoutes);
router.use('/dashboard', dashboardRoutes )
router.use('/api', apiRputes);

//module.exports
module.exports = router;

