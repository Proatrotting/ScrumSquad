const express = require('express');
const router = express.Router();
const { getCleaners } = require('../controllers/cleanerController');

router.get('/', getCleaners);

module.exports = router;
