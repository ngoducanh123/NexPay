const jwt = require('jsonwebtoken');

const login = (req, res) => {
  // Mock auth
  const token = jwt.sign({ user: 'merchant' }, process.env.JWT_SECRET || 'secret');
  res.json({ token });
};

module.exports = { login };