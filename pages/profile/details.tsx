import { Divider, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Avatar from '../../components/Avatar';
import Card from '../../components/Card';
import CheckboxGroup from '../../components/CheckboxGroup';
import InputField from '../../components/InputField';
import ProfilePageBase from '../../components/ProfilePageBase';
import HideOnMobile from '../../helpers/HideOnMobile';

const Details = () => {
  return (
    <ProfilePageBase activePage="details">
      <Card title="Personal details" sx={{ flex: 1 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
          <Box sx={{ flex: 1, pt: 5, alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
            <Typography variant="body1">Profile image</Typography>
            <Avatar src="https://i.pravatar.cc/119" sx={{ width: 100, height: 100, mt: 2 }} />
            <Box sx={{ display: 'flex', mt: 2, alignItems: 'center' }}>
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
          </Box>
          <Box sx={{ flex: 1, minWidth: 250 }}>
            <InputField label="Name" placeHolder="Full name" fullWidth />
            <Box sx={{ display: 'flex' }}>
              <InputField label="Phone" placeHolder="+44" fullWidth sx={{ flex: 1 }} />
              <InputField placeHolder="123123123" fullWidth sx={{ flex: 3, ml: 2 }} />
            </Box>
            <InputField label="Experience" placeHolder="1-3 years" fullWidth />
            <CheckboxGroup checkboxes={['Decentraland', 'Sandbox', 'Somnium']} label="Prefered metaverse" />
          </Box>

        </Box>
        <Divider sx={{mt: 2}} />
        <CheckboxGroup checkboxes={['Verified account']} disabled />
      </Card>
    </ProfilePageBase>
  );
};

export default Details;
