const express = require('express');
const router = express.Router();
const updateController = require('../app/controllers/CreateController');

router.get('/',updateController.index);


module.exports = router;