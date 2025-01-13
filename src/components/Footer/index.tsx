import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'primary.main', 
        color: 'primary.contrastText', 
        pt: 6,
        pb: 4,
        mt: 'auto',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, primary.light 0%, primary.dark 100%)',
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                letterSpacing: 1,
              }}
            >
              Öz Trabzon Ekmeği
            </Typography>
            <Typography 
              variant="body2"
              sx={{ 
                opacity: 0.9,
                lineHeight: 1.8,
                maxWidth: '90%'
              }}
            >
              1980'den beri geleneksel lezzetleri modern üretim teknikleriyle birleştirerek,
              sofralarınıza en kaliteli ekmeği sunuyoruz.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
              }}
            >
              Hızlı Bağlantılar
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {[
                { text: 'Hakkımızda', path: '/about' },
                { text: 'Ürünlerimiz', path: '/products' },
                { text: 'Bayilik', path: '/dealership' },
                { text: 'İletişim', path: '/contact' }
              ].map((link) => (
                <Link
                  key={link.path}
                  component={RouterLink}
                  to={link.path}
                  color="inherit"
                  sx={{
                    textDecoration: 'none',
                    opacity: 0.9,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                      pl: 1,
                    }
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Social Media & Contact */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
              }}
            >
              Bizi Takip Edin
            </Typography>
            <Box sx={{ mb: 3 }}>
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' }
              ].map((social) => (
                <IconButton 
                  key={social.label}
                  color="inherit" 
                  aria-label={social.label}
                  sx={{ 
                    mr: 1,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      bgcolor: 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  <social.icon />
                </IconButton>
              ))}
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.9, mb: 1 }}>
              Email: info@oztrabzonekmegi.com
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Tel: +90 (xxx) xxx xx xx
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 4, mb: 3, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Copyright */}
        <Typography
          variant="body2"
          align="center"
          sx={{ opacity: 0.8 }}
        >
          © {currentYear} Öz Trabzon Ekmeği. Tüm hakları saklıdır.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 