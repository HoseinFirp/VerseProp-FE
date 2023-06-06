import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/system';
import Head from 'next/head';
import { theme } from '../theme';
import AuthProvider from '../helpers/AuthProvider';
import dynamic from 'next/dynamic';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});