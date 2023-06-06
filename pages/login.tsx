import { Password } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Button from '../components/Button';
import InputField from '../components/InputField';
import HideOnMobile from '../helpers/HideOnMobile';



const LoginPage = () => {
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (password === '123456') {
      window.localStorage.setItem('isLoggedIn', 'true');
      window.location.reload();
    }
    else {
      alert('Invalid password');
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <HideOnMobile>
        <Box
          sx={{
            backgroundColor: '#F3EFFC',
            height: '100vh',
            width: 350,
          }}
        />
      </HideOnMobile>
      <Box
        sx={{
          backgroundColor: 'white',
          height: '100vh',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 350,
            alignItems: 'center',
          }}
        >
          <Typography variant="h3">Welcome back!</Typography>
          <InputField
            label="Email"
            type="email"
            placeHolder="Enter your email"
            fullWidth
          />
          <InputField
            label="Password"
            type="password"
            placeHolder="********"
            fullWidth
            inputProps={{ value: password, onChange: (e: any) => setPassword(e.target.value) }}
          />
          <Button sx={{ width: '100%', mt: 3 }} onClick={handleLogin}>
            Continue
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
