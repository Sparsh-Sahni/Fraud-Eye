const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    cardNumber: String,
    transactionAmount: Number,
    frequency: Number,
    location: String,
    time: Date,
    merchantCategory: String,
    deviceIP: String,
    logicPatterns: String,
    velocity: String,
    cardPresent: Boolean,
    declinedTransactions: Number,
    fraudLabel: String
});

module.exports = mongoose.model('Transaction', transactionSchema);
