/* eslint-disable no-constant-condition */
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#white' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.1rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const InputField = ({
  label,
  defaultValue,
  placeHolder,
  type,
  fullWidth,
  sx,
  inputProps
}: any) => {
  return (
    <FormControl
      variant="standard"
      sx={{ mt: 3, width: fullWidth ? '100%' : 'auto', ...sx }}
    >
      <InputLabel shrink htmlFor="bootstrap-input">
        {label}
      </InputLabel>
      <BootstrapInput
        defaultValue={defaultValue}
        placeholder={placeHolder}
        type={type || 'text'}
        id="bootstrap-input"
        endAdornment={
          type === 'password' && (
            <InputAdornment
              position="end"
              sx={{ position: 'absolute', right: 15 }}
            >
              <IconButton
                aria-label="toggle password visibility"
                // onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {false ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
        {...inputProps}
      />
    </FormControl>
  );
};

export default InputField;
