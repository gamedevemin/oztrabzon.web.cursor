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
import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontFamily="Playfair Display">
              Öz Trabzon Ekmeği
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              1980'den beri geleneksel lezzeti sofralarınıza taşıyoruz.
              Kaliteli malzeme ve özenli üretim anlayışımızla hizmetinizdeyiz.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontFamily="Playfair Display">
              Hızlı Bağlantılar
            </Typography>
            <Box>
              {[
                { title: 'Hakkımızda', path: '/about' },
                { title: 'Ürünler', path: '/products' },
                { title: 'Bayilik', path: '/dealership' },
                { title: 'İletişim', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  component="button"
                  variant="body2"
                  onClick={() => navigate(link.path)}
                  sx={{
                    color: 'primary.contrastText',
                    display: 'block',
                    mb: 1,
                    textAlign: 'left',
                    '&:hover': {
                      color: 'secondary.main',
                    },
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact & Social */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom fontFamily="Playfair Display">
              İletişim
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Adres: Trabzon Organize Sanayi Bölgesi<br />
              Tel: +90 (462) 123 45 67<br />
              E-posta: info@oztrabzonekmegi.com
            </Typography>
            <Box>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'primary.contrastText', mr: 1 }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'primary.contrastText', mr: 1 }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'primary.contrastText' }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography
          variant="body2"
          align="center"
          sx={{ mt: 4, borderTop: 1, borderColor: 'primary.light', pt: 2 }}
        >
          © {currentYear} Öz Trabzon Ekmeği. Tüm hakları saklıdır.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 