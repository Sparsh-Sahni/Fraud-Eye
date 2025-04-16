// controllers/transactionController.js
import Transaction from '../models/transaction.js';

export const getTransactionHistory = async (req, res) => {
  const { cardNumber } = req.params; // Get the card number from the URL parameters
  
  try {
    // Fetch transactions for the specific card number
    const transactions = await Transaction.find({ cardNumber: cardNumber });
    
    if (transactions.length === 0) {
      return res.status(404).json({ message: 'No transactions found for this card number' });
    }
    console.log(transactions); // log the data here to see what is being returned
    res.json(transactions); // send as JSON response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching transactions', error });
  }
};
