import Router from 'next/router';

const RedirectPage = () => {
  // Make sure we're in the browser
  if (typeof window !== 'undefined') {
    Router.push('/profile/account');
  }
};

export default RedirectPage;
