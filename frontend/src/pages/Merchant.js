import React, { useEffect, useState } from 'react';
import MerchantDashboard from '../components/MerchantDashboard';
import api from '../services/api';

const Merchant = () => {
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
    api.get('/merchants').then((res) => setMerchants(res.data));
  }, []);

  return <MerchantDashboard merchants={merchants} />;
};

export default Merchant;