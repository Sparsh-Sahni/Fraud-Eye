import express from 'express';
import { getTransactionHistory } from '../controllers/transactionController.js';

const router = express.Router();

router.get('/transactions/:cardNumber', getTransactionHistory);

export default router;
