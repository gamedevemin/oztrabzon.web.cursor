import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer/index';
import Toast from './Toast/index';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>
      <Footer />
      <Toast />
    </Box>
  );
};

export default Layout; 