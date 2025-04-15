const Transaction = require('../models/Transaction');

const getTransactionsByCardNumber = async (req, res) => {
    try {
        const cardNumber = req.params.cardNumber;
        const transactions = await Transaction.find({ cardNumber });

        if (!transactions.length) {
            return res.status(404).json({ message: "No transactions found for this card." });
        }

        res.json(transactions);
    } catch (error) {
        console.error("Transaction fetch error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { getTransactionsByCardNumber };
