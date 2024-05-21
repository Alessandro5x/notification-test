const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.post('/send', notificationController.send);
router.get('/logs', notificationController.getLogs);

module.exports = router;
