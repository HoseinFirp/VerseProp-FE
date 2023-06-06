import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ButtonGroup from '../../components/ButtonGroup';
import Card from '../../components/Card';
import NFTTable from '../../components/NFTTable';
import ProfilePageBase from '../../components/ProfilePageBase';

const Transactions = () => {
  return (
    <ProfilePageBase activePage="transactions">
      <Typography variant="h3">Transactions</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '100%', mt: 3 }}>
        <Card sx={{ mr: 2, flex: 1, minWidth: 150 }}>
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
        <Card sx={{ mr: 2, flex: 1, minWidth: 150 }}>
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
        <Card sx={{ mr: 2, flex: 1, minWidth: 150 }}>
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
      </Box>
      <ButtonGroup buttons={['All', 'In Progress', 'Completed']} sx={{mt: 3}} />
      <NFTTable rows={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
    </ProfilePageBase>
  );
};

export default Transactions;