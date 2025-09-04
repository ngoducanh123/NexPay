const R = require('ramda');

// Example FP utility for complex logic
const composePaymentLogic = R.compose(
  R.assoc('status', 'processed'),
  R.assoc('fee', R.multiply(0.01))
);

module.exports = { composePaymentLogic };