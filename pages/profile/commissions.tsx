import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';
import Card from '../../components/Card';
import NFTTable from '../../components/NFTTable';
import ProfilePageBase from '../../components/ProfilePageBase';

const Commissions = () => {
  return (
    <ProfilePageBase activePage="commissions">
      <Typography variant="h3">Commissions</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', mt: 3 }}>
        <Card sx={{ mr: 2, flex: 1, minWidth: 250, display: 'flex' }}>
          <Box sx={{flex: 1}}>
            <Typography variant="body2">Active commissions</Typography>
            <Typography
              variant="body1"
              sx={{
                mt: 1,
                ml: 1,
                fontSize: 20,
                fontWeight: 500,
                display: 'inline'
              }}
            >
                        $123,123
            </Typography>
          </Box>
          <Button variant="contained" sx={{ mt: 2, float: 'right' }}>Claim</Button>
        </Card>
        <Card sx={{ mr: 2, flex: 1, minWidth: 250 }}>
          <Typography variant="body2">Active commissions</Typography>
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
        <Card sx={{ mr: 2, flex: 1, minWidth: 250 }}>
          <Typography variant="body2">Active commissions</Typography>
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
      <ButtonGroup buttons={['All', 'In Progress', 'Completed']} sx={{mt: 3}} />
      <NFTTable rows={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
    </ProfilePageBase>
  );
};

export default Commissions;