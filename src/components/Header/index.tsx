import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, useTheme, useMediaQuery, IconButton, Menu, MenuItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: 'Ana Sayfa', path: '/' },
    { label: 'Ürünlerimiz', path: '/products' },
    { label: 'Hakkımızda', path: '/about' },
    { label: 'Bayilik', path: '/dealership' },
    { label: 'Blog', path: '/blog' },
    { label: 'İletişim', path: '/contact' },
  ];

  return (
    <AppBar 
      position="sticky" 
      elevation={0} 
      sx={{ 
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
          <Typography
            variant="h5"
            component={RouterLink}
            to="/"
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 700,
              letterSpacing: 1.2,
              fontFamily: 'Playfair Display, serif',
              '&:hover': {
                color: 'primary.dark',
              },
            }}
          >
            Öz Trabzon Ekmeği
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ color: 'text.primary' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                sx={{ mt: 2 }}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    onClick={handleMenuClose}
                    sx={{
                      color: 'text.primary',
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    position: 'relative',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent',
                      '&::after': {
                        width: '100%',
                      },
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: '2px',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 