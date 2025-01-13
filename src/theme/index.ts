import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513', // Brown
      light: '#A0522D',
      dark: '#6B3E26',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F5DEB3', // Wheat
      light: '#FFF8DC',
      dark: '#DEB887',
      contrastText: '#000',
    },
    background: {
      default: '#FFFAF0', // Cream
      paper: '#fff',
    },
    text: {
      primary: '#3E2723',
      secondary: '#5D4037',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 600,
      fontSize: '3rem',
    },
    h3: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h4: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 600,
      fontSize: '2rem',
    },
    h5: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
    },
    button: {
      textTransform: 'none' as const,
      fontWeight: 500,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

export default theme; 