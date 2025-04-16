import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import transactionRoutes from './routes/transactionRoute.js';

const app = express();
connectDB();

app.use(cors({
  origin: 'http://localhost:8000',
  credentials: true
}));

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
