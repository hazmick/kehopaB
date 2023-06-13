const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  email: { type: String },
  txn: [{
    type: String,
    amount: Number,
    date: String,
    status: String,
    address: String,
    coin: String
  }],
  time: { type: String }
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;