import { BottomNavigation, BottomNavigationAction, Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Card from '../Card';
import HideOnMobile from '../../helpers/HideOnMobile';
import Link from 'next/link';
import { useState } from 'react';
import Router from 'next/router';
import ShowOnMobile from '../../helpers/ShowOnMobile';

const PROFILE_PAGES = [
  { name: 'account', title: 'Your Account' },
  { name: 'details', title: 'Personal details' },
  { name: 'wallet', title: 'Wallet' },
  { name: 'transactions', title: 'Transactions' },
  { name: 'commissions', title: 'Commissions' },
  { name: 'security', title: 'Security' },
  { name: 'notifications', title: 'Notifications' },
];

function ProfilePageBase({ activePage, children }: any) {
  const [tab, setTab] = useState(PROFILE_PAGES.findIndex(c => c.name === activePage));
  return (
    <Container sx={{ m: 0, p: 0, maxWidth: '100% !important', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', width: '90%' }}>
        <HideOnMobile>
          <Card sx={{ width: 300, m: 2, p: 4, height: 'fit-content' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              {PROFILE_PAGES.map((page: any) => {
                const isActive = activePage === page.name;
                return (
                  <Link href={`/profile/${page.name}`} key={page.name}>
                    <Typography
                      variant="body2"
                      color={isActive ? 'primary' : 'none'}
                      sx={{ fontSize: 16, m: 1, fontWeight: isActive ? 600 : 300, cursor: 'pointer' }}
                    >
                      {page.title}
                    </Typography>
                  </Link>
                );
              })}
            </Box>
          </Card>
        </HideOnMobile>
        <Box sx={{ m: 2, flex: 1 }}>
          {children}
        </Box>
      </Box>
      <ShowOnMobile>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, overflowX: 'scroll' }} elevation={3}>
          <BottomNavigation
            showLabels
            value={tab}
            onChange={(event, newTab) => {
              setTab(newTab);
              Router.push('/profile/' + PROFILE_PAGES[newTab].name);
            }}
          >
            {PROFILE_PAGES.slice(0, 3).map((page: any) => (
              <BottomNavigationAction label={page.title} key={page} />
            ))}
          </BottomNavigation>
        </Paper>
      </ShowOnMobile>
    </Container>
  );
}

export default ProfilePageBase;
