import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Card from '../../components/Card';
import ProfilePageBase from '../../components/ProfilePageBase';

const Wallet = () => {
  return (
    <ProfilePageBase activePage="wallet">
      <Typography variant="h3">Wallet</Typography>
      <Card sx={{ mt: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png" width="30" height="30" />
          <Typography variant="body1" sx={{ fontSize: 16, ml: 2 }}>0x123..123</Typography>
        </Box>
      </Card>
    </ProfilePageBase>
  );
};

export default Wallet;