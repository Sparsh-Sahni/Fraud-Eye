const express = require('express');
const router = express.Router();
const { getTransactionsByCardNumber } = require('../controllers/transactionController');

router.get('/transactions/:cardNumber', getTransactionsByCardNumber);

module.exports = router;
