const express = require('express');
const { processPayment, getPaymentStatus } = require('../controllers/paymentController');
const authenticateToken = require("../middlewares/authenticateToken"); // Middleware to authenticate requests
const router = express.Router();

router.post('/api/payments', authenticateToken, processPayment);
router.get('/api/payments/:bookingId', authenticateToken, getPaymentStatus);

module.exports = router;
