import { EmailOutlined, LockOutlined, ShieldOutlined } from '@mui/icons-material';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Card from '../../components/Card';
import ProfilePageBase from '../../components/ProfilePageBase';

const Security = () => {
  return (
    <ProfilePageBase activePage="security">
      <Typography variant="h3">Security</Typography>
      <Card sx={{ mt: 3, p: 3 }}>
        <Box sx={{ display: 'flex' }}>
          <EmailOutlined />
          <Box>
            <Typography variant="body1" sx={{ fontSize: 18, ml: 2 }}>Email address</Typography>
            <Typography variant="body2" sx={{ fontSize: 15, ml: 2, fontWeight: 300 }}>The advisors email address is joel@verseprop.com</Typography>
          </Box>
        </Box>
        <Divider sx={{ my: 3 }} />
        <Box sx={{ display: 'flex' }}>
          <LockOutlined />
          <Box>
            <Typography variant="body1" sx={{ fontSize: 18, ml: 2 }}>Password</Typography>
            <Typography variant="body2" sx={{ fontSize: 15, ml: 2, fontWeight: 300 }}>You can send a password reset email to the advisors email address if he does not remember it.</Typography>
          </Box>
        </Box>
      </Card>

      <Typography variant="h3" sx={{mt: 5}}>Other settings</Typography>
      <Card sx={{ mt: 3, p: 3 }}>
        <Box sx={{ display: 'flex' }}>
          <ShieldOutlined />
          <Box>
            <Typography variant="body1" sx={{ fontSize: 18, ml: 2 }}>2FA Secuirty</Typography>
            <Typography variant="body2" sx={{ fontSize: 15, ml: 2, fontWeight: 300 }}>Enable the 2FA secuity option to increase the secuirty of your account</Typography>
          </Box>
        </Box>
      </Card>
    </ProfilePageBase>
  );
};

export default Security;