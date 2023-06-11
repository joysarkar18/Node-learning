const express = require('express');
const path = require('path')
const router = express.Router();


const personController = require("../controllers/personController")
router.get('/form', personController.getPerson);

exports.router = router;