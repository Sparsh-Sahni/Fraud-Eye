import express from 'express';
import { signupUser, loginUser } from '../controllers/authController.js'; // Assuming your controller is named authController.js

const router = express.Router();

// Signup route
router.post('/signup', signupUser);

// Login route
router.post('/login', loginUser);

export default router;
