const express = require('express');
const router = express.Router();
const BookController = require('../app/controllers/BookController');

router.use('/',BookController.index);

module.exports = router;