const express = require('express');
const router = express.Router();
const BookController = require('../app/controllers/BookController');
const UpdateController = require('../app/controllers/UpdateController');
router.get('/',BookController.index);
router.put('/',UpdateController.update);
module.exports = router;