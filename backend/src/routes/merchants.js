const express = require('express');
const { getMerchants, updateMerchant } = require('../controllers/merchantController');

const router = express.Router();

router.get('/', getMerchants);
router.put('/:id', updateMerchant);

module.exports = router;