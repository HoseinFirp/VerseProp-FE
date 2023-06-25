import Router from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import dynamic from 'next/dynamic';

interface AuthProviderProps {
  children: JSX.Element;
}

const AuthProvider = ({ children }: AuthProviderProps): JSX.Element|null => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  useEffect(() => {
    const loggedIn = window.localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
    const { pathname } = Router;
    if (pathname === '/login' && loggedIn) Router.push('/');
  }, []);
  useEffect(() => {
    if (isLoggedIn === false) Router.push('/login');
  }, [isLoggedIn]);

  if (isLoggedIn === null) return null;
  return (
    <>
      {isLoggedIn && <Header />}
      {children}
    </>
  );
};

export default AuthProvider;
