import React from 'react';
import { Button } from '@mui/material';
import api from '../services/api';

const OneClickPayment = ({ userId, amount }) => {
  const handleClick = async () => {
    try {
      const response = await api.post('/payments/oneclick', { userId, amount });
      alert('Payment Successful: ' + response.data.transactionId);
    } catch (error) {
      alert('Payment Failed');
    }
  };

  return <Button onClick={handleClick} variant="contained">1-Click Pay</Button>;
};

export default OneClickPayment;