const express = require("express");
const router = express.Router();

const filterController = require('../controllers/filter_controller');

router.post('/filter', filterController.filter);

module.exports = router;