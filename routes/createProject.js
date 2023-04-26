const express = require("express");
const router = express.Router();

const create_New_Project = require('../controllers/createProject_controller');

router.get('/newProject', create_New_Project.create_newProject);

router.post('/project', create_New_Project.create_Project);

module.exports = router;