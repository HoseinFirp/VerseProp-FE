import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

const CheckboxGroup = ({ label, checkboxes, disabled }: any) => {
  return (
    <FormGroup sx={{mt: 2}}>
      <Typography variant="body1">{label}</Typography>
      {checkboxes.map((checkbox: any) => (
        <FormControlLabel sx={{ml: 1, '& .MuiTypography-root': {fontSize: 14, fontWeight: 300}}} control={<Checkbox disabled={disabled} defaultChecked sx={{ p: 1, '& .MuiSvgIcon-root': { fontSize: 20 } }} />} key={checkbox} label={checkbox} />
      ))}
    </FormGroup>
  );
};

export default CheckboxGroup;