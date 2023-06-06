import { Divider, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Card from '../../components/Card';
import ProfilePageBase from '../../components/ProfilePageBase';
import HideOnMobile from '../../helpers/HideOnMobile';

const YourAccount = () => {
  return (
    <ProfilePageBase activePage="account">
      <Box sx={{ flex: 1 }}>
        <Card title="Account" sx={{ m: 2 }}>
          <Divider />
          <Box sx={{ display: 'flex', m: 2, alignItems: 'center' }}>
            <Avatar sx={{ width: 50, height: 50 }} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                ml: 2,
                flex: 1,
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: 600, fontSize: 16 }}
              >
                Advisor name
              </Typography>
              <Typography variant="body2" sx={{ fontSize: 12 }}>
                joel@verseprop.com
              </Typography>
              <Typography variant="body2" sx={{ fontSize: 12 }}>
                +44 123123123
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                ml: 2,
                height: 40,
              }}
            >
              <Typography variant="body2">Rank</Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: 16,
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                1
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                ml: 2,
                height: 40,
              }}
            >
              <Rating name="read-only" value={4} readOnly size="small" />
              <Typography
                variant="body2"
                sx={{ fontSize: 12, textAlign: 'center' }}
              >
                4.0 (123)
              </Typography>
            </Box>
            <HideOnMobile>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  ml: 2,
                  height: 40,
                }}
              >
                <Typography variant="body2">Response time</Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: 12, textAlign: 'center' }}
                >
                  {'< 30 sec'}
                </Typography>
              </Box>
            </HideOnMobile>
          </Box>
          <Divider />
          <Button variant="outlined" sx={{ m: 2, px: 2 }}>
            Edit profile
          </Button>
        </Card>
        <Box sx={{ m: 2 }}>
          <Typography variant="body1">Transactions</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Card sx={{ m: 2, flex: 1, minWidth: 150 }}>
              <Typography variant="body2">Active transactions</Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  ml: 1,
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                $123,123
              </Typography>
            </Card>
            <Card sx={{ m: 2, flex: 1, minWidth: 150 }}>
              <Typography variant="body2">Successful transactions</Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  ml: 1,
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                $123,123
              </Typography>
            </Card>
            <Card sx={{ m: 2, flex: 1, minWidth: 150 }}>
              <Typography variant="body2">All transactions</Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  ml: 1,
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                $123,123
              </Typography>
            </Card>
          </Box>
        </Box>
        <Box sx={{ m: 2 }}>
          <Typography variant="body1">Commissions</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Card sx={{ m: 2, flex: 1, minWidth: 150 }}>
              <Typography variant="body2">This month</Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  ml: 1,
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                $123,123
                <Button
                  variant="outlined"
                  sx={{ mt: 1, ml: 1, float: 'right' }}
                >
                  Claim
                </Button>
              </Typography>
            </Card>
            <Card sx={{ m: 2, flex: 1, minWidth: 150 }}>
              <Typography variant="body2">Best month</Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  ml: 1,
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                $123,123
              </Typography>
            </Card>
            <Card sx={{ m: 2, flex: 1, minWidth: 150 }}>
              <Typography variant="body2">Total commissions</Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 1,
                  ml: 1,
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                $123,123
              </Typography>
            </Card>
          </Box>
        </Box>
      </Box>
    </ProfilePageBase>
  );
};

export default YourAccount;
