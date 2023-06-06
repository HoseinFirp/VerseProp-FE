import { EmailOutlined, LockOutlined, ShieldOutlined } from '@mui/icons-material';
import { Divider, Switch, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Card from '../../components/Card';
import ProfilePageBase from '../../components/ProfilePageBase';

const Notifications = () => {
  return (
    <ProfilePageBase activePage="notifications">
      <Typography variant="h3">Notifications</Typography>
      <Card sx={{ mt: 3, p: 3 }}>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => <>
          <Box sx={{ display: 'flex' }}>
            <EmailOutlined />
            <Box>
              <Typography variant="body1" sx={{ fontSize: 18, ml: 2 }}>Message</Typography>
              <Typography variant="body2" sx={{ fontSize: 15, ml: 2, fontWeight: 300 }}>When someone sends you a message</Typography>
            </Box>
            <Box sx={{flex: 1}}>
              <Switch defaultChecked sx={{float: 'right'}} />
            </Box>
          </Box>
          {item !== 7 && <Divider sx={{ my: 3 }} />}</> )}
        
      </Card>
    </ProfilePageBase>
  );
};

export default Notifications;