const express = require("express");
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);

router.use('/users', require('./users'));

router.use('/add', require('./createProject'));

// create new project and add to database
router.use('/create', require('./createProject'));

router.use('/delete', require('./deleteProject'));

router.use('/issue', require('./createIssue'));

router.use('/content', require('./filter'));

module.exports = router;