import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
  Fab,
  Zoom,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  Paper,
  Rating,
  Avatar,
  Stack,
  Divider
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { 
  LocalShipping as LocalShippingIcon,
  Timer as TimerIcon,
  Spa as SpaIcon,
  Star as StarIcon,
  ArrowForward as ArrowForwardIcon,
  ShoppingCart as ShoppingCartIcon,
  WhatsApp as WhatsAppIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
  cssEase: "linear"
};

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero Section with 3D Model
  const HeroSection = () => {
    return (
      <Box
        sx={{
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(45deg, #8B4513 30%, #D2691E 90%)',
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            {/* 3D model temporarily disabled
            <Grid item xs={12} md={6}>
              <BreadScene />
            </Grid>
            */}
            <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
              <Typography variant="h2" component="h1" gutterBottom>
                Öz Trabzon Ekmeği
              </Typography>
              <Typography variant="h5" gutterBottom>
                Geleneksel lezzet, modern sunum
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => setOpenDialog(true)}
                  sx={{ mr: 2, mb: { xs: 2, sm: 0 } }}
                >
                  Sipariş Ver
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  color="inherit"
                  component={Link}
                  to="/products"
                >
                  Ürünlerimiz
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };

  const features = [
    {
      title: 'Geleneksel Üretim',
      description: 'Trabzon\'un asırlık ekmek yapım geleneğini modern tekniklerle buluşturuyoruz.',
      icon: <SpaIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      title: 'Taze Teslimat',
      description: 'Günlük üretim ve hızlı teslimat ile en taze haliyle sofralarınıza ulaştırıyoruz.',
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    },
    {
      title: 'Kalite Garantisi',
      description: 'Her diliminde Trabzon\'un eşsiz lezzetini ve kalitesini garanti ediyoruz.',
      icon: <TimerIcon sx={{ fontSize: 40, color: 'primary.main' }} />
    }
  ];

  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Restoran Sahibi',
      comment: 'Müşterilerimiz özellikle kahvaltıda Öz Trabzon ekmeğini tercih ediyor. Lezzeti ve kalitesi tartışılmaz.',
      rating: 5,
      avatar: '/avatars/avatar1.jpg'
    },
    {
      name: 'Ayşe Kaya',
      role: 'Ev Hanımı',
      comment: 'Yıllardır ailemizin vazgeçilmezi. Gerçek Trabzon ekmeğinin tadını ve kokusunu yaşatıyorlar.',
      rating: 5,
      avatar: '/avatars/avatar2.jpg'
    }
  ];

  return (
    <Box>
      <HeroSection />

      {/* Features Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)'
                    }
                  }}
                  onClick={() => setOpenDialog(true)}
                >
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 600
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {feature.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Product Showcase */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              mb: 6,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            En Çok Tercih Edilen Ürünlerimiz
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  overflow: 'hidden',
                  boxShadow: theme.shadows[5],
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: theme.shadows[15],
                    transform: 'scale(1.02)',
                    transition: 'all 0.3s ease'
                  }
                }}
                onClick={() => setOpenDialog(true)}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: '100%', md: '50%' },
                    height: { xs: 240, md: 'auto' }
                  }}
                  image="/images/product1.jpg"
                  alt="Trabzon Ekmeği"
                />
                <CardContent sx={{ flex: 1, p: 4 }}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 600
                    }}
                  >
                    Klasik Trabzon Ekmeği
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 3 }}
                  >
                    Geleneksel tarifimizle hazırlanan, içi yumuşacık, dışı çıtır çıtır klasik Trabzon ekmeği.
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDialog(true);
                    }}
                    sx={{
                      textTransform: 'none',
                      borderRadius: '30px',
                      py: 1,
                      px: 3,
                      bgcolor: theme.palette.secondary.main,
                      '&:hover': {
                        bgcolor: theme.palette.secondary.dark
                      }
                    }}
                  >
                    Sipariş Ver
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  overflow: 'hidden',
                  boxShadow: theme.shadows[5],
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: theme.shadows[15],
                    transform: 'scale(1.02)',
                    transition: 'all 0.3s ease'
                  }
                }}
                onClick={() => setOpenDialog(true)}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: '100%', md: '50%' },
                    height: { xs: 240, md: 'auto' }
                  }}
                  image="/images/product2.jpg"
                  alt="Tam Buğday Trabzon Ekmeği"
                />
                <CardContent sx={{ flex: 1, p: 4 }}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontFamily: 'Playfair Display, serif',
                      fontWeight: 600
                    }}
                  >
                    Tam Buğday Trabzon Ekmeği
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 3 }}
                  >
                    Tam buğday unundan üretilen, sağlıklı ve lezzetli alternatif.
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenDialog(true);
                    }}
                    sx={{
                      textTransform: 'none',
                      borderRadius: '30px',
                      py: 1,
                      px: 3,
                      bgcolor: theme.palette.secondary.main,
                      '&:hover': {
                        bgcolor: theme.palette.secondary.dark
                      }
                    }}
                  >
                    Sipariş Ver
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box 
        sx={{ 
          py: { xs: 6, md: 10 }, 
          bgcolor: 'background.paper',
          '& .slick-slider': {
            '& .slick-list': {
              mx: -2,
            },
            '& .slick-slide': {
              px: 2,
            },
            '& .slick-track': {
              display: 'flex !important',
              '& .slick-slide': {
                height: 'inherit !important',
                '& > div': {
                  height: '100%'
                }
              }
            }
          }
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              mb: 6,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Müşterilerimiz Ne Diyor?
          </Typography>
          <Box>
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} style={{ height: '100%' }}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: theme.shadows[10]
                      },
                      '&::before': {
                        content: '"""',
                        position: 'absolute',
                        top: 20,
                        left: 20,
                        fontSize: '4rem',
                        color: 'primary.main',
                        opacity: 0.1,
                        fontFamily: 'serif'
                      }
                    }}
                    onClick={() => setOpenDialog(true)}
                  >
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 3,
                        fontStyle: 'italic',
                        lineHeight: 1.8
                      }}
                    >
                      {testimonial.comment}
                    </Typography>
                    <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        src={testimonial.avatar}
                        sx={{ width: 56, height: 56, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </div>
              ))}
            </Slider>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          bgcolor: 'primary.main',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '1.8rem', md: '2.5rem' }
            }}
          >
            Siz de Öz Trabzon Ekmeği Ailesine Katılın
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              fontWeight: 300,
              opacity: 0.9
            }}
          >
            Türkiye'nin en kaliteli Trabzon ekmeği üreticisi ile işbirliği yaparak kazançlı bir yatırıma adım atın.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpenDialog(true)}
              sx={{
                color: 'primary.main',
                bgcolor: 'white',
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                textTransform: 'none',
                borderRadius: '30px',
                '&:hover': {
                  bgcolor: 'grey.100'
                }
              }}
              startIcon={<ShoppingCartIcon />}
            >
              Hemen Sipariş Ver
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/dealership')}
              sx={{
                color: 'white',
                borderColor: 'white',
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                textTransform: 'none',
                borderRadius: '30px',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Bayilik Başvurusu
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Floating Order Button */}
      <Zoom in={true} style={{ transitionDelay: '500ms' }}>
        <Fab
          variant="extended"
          color="secondary"
          sx={{
            position: 'fixed',
            bottom: 32,
            right: 32,
            zIndex: 1000,
            boxShadow: theme.shadows[10],
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: theme.shadows[15],
            },
            transition: 'all 0.3s ease'
          }}
          onClick={() => setOpenDialog(true)}
        >
          <ShoppingCartIcon sx={{ mr: 1 }} />
          Hemen Sipariş Ver
        </Fab>
      </Zoom>

      {/* Quick Order Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ 
          fontFamily: 'Playfair Display, serif',
          textAlign: 'center',
          fontSize: '1.8rem',
          fontWeight: 700,
          color: 'primary.main'
        }}>
          Hızlı Sipariş
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body1" paragraph>
              Size nasıl yardımcı olabiliriz? Siparişinizi hemen iletin!
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Adınız Soyadınız"
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Telefon Numaranız"
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Sipariş Notunuz"
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                sx={{
                  bgcolor: '#25D366',
                  '&:hover': {
                    bgcolor: '#128C7E'
                  }
                }}
                onClick={() => {
                  window.open('https://wa.me/905555555555', '_blank');
                }}
              >
                WhatsApp ile Sipariş
              </Button>
              <Button
                variant="contained"
                startIcon={<PhoneIcon />}
                onClick={() => {
                  window.location.href = 'tel:+905555555555';
                }}
              >
                Hemen Ara
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={() => setOpenDialog(false)}>Kapat</Button>
        </DialogActions>
      </Dialog>

      {/* Success Message */}
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={6000}
        onClose={() => setShowSuccessMessage(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled">
          Siparişiniz başarıyla alındı! En kısa sürede size ulaşacağız.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Home; 