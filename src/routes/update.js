const express = require('express');
const router = express.Router();
const updateController = require('../app/controllers/UpdateController');

router.get('/',updateController.index);
router.post('/',updateController.show);

module.exports = router;