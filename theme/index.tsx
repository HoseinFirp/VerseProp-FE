import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  spacing: 6,
  palette: {
    mode: 'light',
    primary: {
      main: '#4A2E80',
      contrastText: '#EBE3FC',
      dark: '#382360',
    },
    secondary: {
      main: '#EDEAF2',
      contrastText: '#16161A',
    },
    success: {
      light: '#EBF9F5',
      main: '#34C796',
      contrastText: '#fff',
    },
    error: {
      main: '#FF5330',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: ['Plus Jakarta Sans', 'sans-serif'].join(','),
    h1: {
      color: '#16161A',
      fontSize: 56,
      fontWeight: 500,
    },
    h2: {
      color: '#16161A',
      fontSize: 40,
      fontWeight: 500,
    },
    h3: {
      color: '#16161A',
      fontSize: 24,
      fontWeight: 500,
    },
    subtitle1: {
      color: '#16161A',
      fontSize: 13,
      fontWeight: 600,
    },
    body1: {
      color: '#16161A',
      fontSize: 18,
    },
    body2: {
      color: '#656573',
      fontSize: 14,
    },
  },
});
