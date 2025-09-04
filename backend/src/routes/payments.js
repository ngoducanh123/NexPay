const express = require('express');
const { processPayment, oneClickPayment } = require('../controllers/paymentController');

const router = express.Router();

router.post('/', processPayment);
router.post('/oneclick', oneClickPayment);

module.exports = router;