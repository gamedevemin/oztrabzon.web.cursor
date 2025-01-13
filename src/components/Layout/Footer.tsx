import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Öz Trabzon Ekmeği
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Geleneksel lezzetin modern sunumu.
              <br />
              1980'den beri hizmetinizdeyiz.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Hızlı Linkler
            </Typography>
            <Link component={RouterLink} to="/about" color="inherit" display="block">
              Hakkımızda
            </Link>
            <Link component={RouterLink} to="/products" color="inherit" display="block">
              Ürünlerimiz
            </Link>
            <Link component={RouterLink} to="/dealership" color="inherit" display="block">
              Bayilik
            </Link>
            <Link component={RouterLink} to="/contact" color="inherit" display="block">
              İletişim
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Bizi Takip Edin
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Adres: Trabzon, Türkiye
              <br />
              Tel: +90 (462) XXX XX XX
              <br />
              E-posta: info@oztrabzonekmegi.com
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Öz Trabzon Ekmeği. Tüm hakları saklıdır.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 