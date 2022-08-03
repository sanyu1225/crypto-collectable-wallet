import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <CssBaseline />
      <Header />
      {children}
    </>
  );
}
