const express = require("express");
const router = express.Router();

const issueController = require('../controllers/issue_controller');

router.get('/projectDetail/:id', issueController.project_Detail);

router.get('/add/:id', issueController.add);

router.post('/create', issueController.create);

module.exports = router;