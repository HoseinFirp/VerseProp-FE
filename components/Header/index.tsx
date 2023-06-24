import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import Avatar from '../Avatar';

const handleLogout = () => {
  window.localStorage.setItem('isLoggedIn', 'false');
  window.location.reload();
};

const Header = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 70,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            width: 50,
            height: 50,
            position: 'relative',
            marginLeft: 5,
          }}
        >
          <Image src="/verseprop.png" layout="fill" objectFit="contain" />
        </Box>
        <Typography variant="body1">Verseprop</Typography>
      </Box>
      <Box sx={{ padding: 5, display: 'flex', alignItems: 'center' }}>
        <Link href="/">
          <Typography variant="body1" sx={{ cursor: 'pointer', mr: 2 }}>
            Dashbaord
          </Typography>
        </Link>
        <Link href="/profile">
          <Avatar sx={{ cursor: 'pointer' }} />
        </Link>
        <Button sx={{ p: 1 }} onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
