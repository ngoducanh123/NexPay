import React from 'react';
import PaymentForm from '../components/PaymentForm';
import OneClickPayment from '../components/OneClickPayment';

const Home = () => {
  const handlePayment = (data) => {
    console.log('Processing payment:', data);
  };

  return (
    <div>
      <h1>Welcome to NexPay</h1>
      <PaymentForm onSubmit={handlePayment} />
      <OneClickPayment userId="user123" amount={100} />
    </div>
  );
};

export default Home;