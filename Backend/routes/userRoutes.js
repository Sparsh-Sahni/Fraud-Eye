import express from 'express';
import { submitUserForm } from '../controllers/userController.js';

const router = express.Router();

router.post('/submit', submitUserForm);

export default router;
