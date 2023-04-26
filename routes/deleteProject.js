const express = require("express");
const router = express.Router();

const deleteController = require('../controllers/delete_controller');

router.get('/destroy_project', deleteController.deleteProject);

module.exports = router;