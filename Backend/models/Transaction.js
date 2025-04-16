const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    cardNumber: String,
    transactionAmount: Number,
    frequency: Number,
    location: String,
    time: String,  // Keeping time as a string since it's in "DD-MM-YYYY HH:MM" format
    merchantCategory: String,
    deviceIP: String,
    logicPatterns: String,
    velocity: String,
    cardPresent: Boolean,
    declinedTransactions: Number,
    fraudLabel: Number,  // Assuming fraudLabel is numeric (0 or 1)
    firstName: String,   // Added field
    lastName: String,    // Added field
    age: Number,         // Added field
    email: String,       // Added field
    cardExpiry: String,  // Added field
});

module.exports = mongoose.model('Transaction', transactionSchema);
