import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Nature as EcoIcon,
  LocalShipping as LocalShippingIcon,
  CheckCircle as VerifiedIcon,
  People as GroupsIcon,
} from '@mui/icons-material';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: <EcoIcon sx={{ fontSize: 40 }} />,
      title: 'Doğal Malzemeler',
      description: 'En kaliteli un ve doğal maya kullanarak geleneksel yöntemlerle üretim yapıyoruz.',
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      title: 'Taze Teslimat',
      description: 'Her gün taze pişen ekmeklerimizi sıcak sıcak müşterilerimize ulaştırıyoruz.',
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 40 }} />,
      title: 'Kalite Garantisi',
      description: 'TSE ve ISO standartlarına uygun üretim yapıyor, kalitemizi garanti ediyoruz.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: 'Müşteri Memnuniyeti',
      description: '40 yıllık tecrübemizle müşterilerimizin memnuniyetini en üst düzeyde tutuyoruz.',
    },
  ];

  const stats = [
    { value: '40+', label: 'Yıllık Tecrübe' },
    { value: '100+', label: 'Çalışan' },
    { value: '1000+', label: 'Günlük Üretim' },
    { value: '98%', label: 'Müşteri Memnuniyeti' },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: { xs: 6, md: 10 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom fontFamily="Playfair Display">
            Hakkımızda
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: 800, mx: 'auto' }}>
            1980'den beri geleneksel Trabzon ekmeği üretiminde öncü firma olarak,
            kaliteli ve lezzetli ürünlerimizle sofralarınıza konuk oluyoruz.
          </Typography>
        </Container>
      </Box>

      {/* Story Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom color="primary" fontFamily="Playfair Display">
              Hikayemiz
            </Typography>
            <Typography paragraph>
              1980 yılında Trabzon'da küçük bir fırında başlayan yolculuğumuz,
              bugün modern tesislerimizde devam ediyor. Geleneksel tarifleri modern
              üretim teknikleriyle birleştirerek, her gün binlerce ailenin sofrasına
              lezzet katıyoruz.
            </Typography>
            <Typography>
              Öz Trabzon Ekmeği olarak, un seçiminden pişirme aşamasına kadar her
              detayı özenle kontrol ediyor, hijyenik koşullarda üretim yapıyoruz.
              Müşterilerimizin memnuniyeti ve güveni, en büyük motivasyon kaynağımız.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/about-story.jpg"
              alt="Hikayemiz"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            color="primary"
            fontFamily="Playfair Display"
            sx={{ mb: 6 }}
          >
            Değerlerimiz
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                  elevation={2}
                >
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 2,
                }}
              >
                <Typography
                  variant="h3"
                  color="primary"
                  gutterBottom
                  fontFamily="Playfair Display"
                >
                  {stat.value}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 