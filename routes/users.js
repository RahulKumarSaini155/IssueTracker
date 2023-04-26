const express = require("express");
const router = express.Router();

const signInController = require('../controllers/signIn_controller');
const singUpController = require('../controllers/signup_controller');

router.get('/sign-in', signInController.signIn);

router.get('/sign-up', singUpController.signUp);

module.exports = router;