const mongoose = require('mongoose');

const merchantSchema = new mongoose.Schema({
  name: String,
  status: String,
  paymentOptions: [String]
});

module.exports = mongoose.model('Merchant', merchantSchema);