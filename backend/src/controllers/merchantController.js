const Merchant = require('../models/Merchant');

const getMerchants = (req, res) => {
  Merchant.find().then(merchants => res.json(merchants));
};

const updateMerchant = (req, res) => {
  Merchant.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(merchant => res.json(merchant))
    .catch(err => res.status(500).json(err));
};

module.exports = { getMerchants, updateMerchant };