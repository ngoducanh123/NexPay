const R = require('ramda');
const Transaction = require('../models/Transaction');

// FP-style payment processing
const processPayment = R.curry((req, res) => {
  const { amount, upiId } = req.body;
  const transaction = new Transaction({ amount, upiId, status: 'success' });
  transaction.save()
    .then(() => res.json({ transactionId: transaction._id }))
    .catch(err => res.status(500).json(err));
});

const oneClickPayment = R.curry((req, res) => {
  // Simulate 1-click with FP composition
  const validate = R.ifElse(R.propSatisfies(R.gt(R.__, 0), 'amount'), R.identity, () => { throw new Error('Invalid amount'); });
  const process = R.pipe(validate, (data) => new Transaction(data).save());
  process(req.body)
    .then((tx) => res.json({ transactionId: tx._id }))
    .catch(err => res.status(400).json(err.message));
});

module.exports = { processPayment, oneClickPayment };