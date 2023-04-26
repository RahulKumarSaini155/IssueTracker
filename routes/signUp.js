const express = require("express");
const router = express.Router();

const singUpController = require('../controllers/signup_controller');

router.get('/sign-up', singUpController.signUp);

module.exports = router;