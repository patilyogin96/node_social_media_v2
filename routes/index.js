const express = require('express');

const router = express.Router();

const homeController = require('../controllers/home_controller')

console.log("router started");

router.get('/',homeController.home)
router.use('/users' , require('./users'))

// for any further router ,access from here
// router.use('/routerName' , require('./routerfile))


module.exports = router;