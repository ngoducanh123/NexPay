import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MerchantDashboard = ({ merchants }) => {
  return (
    <div>
      <Typography variant="h5">Merchant Management</Typography>
      {merchants.map((merchant) => (
        <Card key={merchant.id}>
          <CardContent>
            <Typography>{merchant.name}</Typography>
            <Typography>Status: {merchant.status}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MerchantDashboard;