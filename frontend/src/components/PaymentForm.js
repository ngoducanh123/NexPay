import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const PaymentForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [upiId, setUpiId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ amount, upiId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <TextField label="UPI ID" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
      <Button type="submit" variant="contained">Pay</Button>
    </form>
  );
};

export default PaymentForm;