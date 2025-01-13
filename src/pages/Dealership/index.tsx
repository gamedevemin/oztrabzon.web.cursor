import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  MonetizationOn as MonetizationOnIcon,
  Storefront as StorefrontIcon,
  Support as SupportIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch } from 'react-redux';
import { showToast } from '../../store/slices/uiSlice';

const advantages = [
  {
    title: 'Güçlü Marka',
    description: "Türkiye'nin en kaliteli Trabzon ekmeği ile yüksek müşteri memnuniyeti",
    icon: <StorefrontIcon />
  },
  {
    title: 'Yüksek Kar Potansiyeli',
    description: 'Türkiye\'nin en kaliteli Trabzon ekmeği ile yüksek kar potansiyeli',
    icon: <MonetizationOnIcon sx={{ fontSize: 40 }} />
  },
  {
    title: 'Sürekli Destek',
    description: 'Eğitim, pazarlama ve operasyon konularında tam destek',
    icon: <SupportIcon />
  }
];

const features = [
  'Marka bilinirliği ve güveni',
  'Özel üretim teknikleri ve reçeteler',
  'Profesyonel eğitim desteği',
  'Pazarlama ve reklam desteği',
  'Operasyonel destek ve danışmanlık',
  'Düşük franchise bedeli'
];

const Dealership = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    investment: '',
    experience: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    dispatch(showToast({
      message: 'Başvurunuz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.',
      type: 'success'
    }));
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      investment: '',
      experience: '',
      message: ''
    });
  };

  return (
    <Box sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: 8,
          mb: 8
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Bayilik Fırsatları
          </Typography>
          <Typography variant="h5" sx={{ mb: 4 }}>
            Türkiye'nin en kaliteli Trabzon ekmeği markasının bir parçası olun
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Advantages Section */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {advantages.map((advantage, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {advantage.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {advantage.title}
                </Typography>
                <Typography color="text.secondary">
                  {advantage.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Features Section */}
        <Paper sx={{ p: 4, mb: 8 }}>
          <Typography variant="h4" gutterBottom>
            Neden Biz?
          </Typography>
          <List>
            {features.map((feature, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Application Form */}
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Bayilik Başvuru Formu
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Ad Soyad"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="E-posta"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Telefon"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Şehir"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Yatırım Miktarı"
                  name="investment"
                  value={formData.investment}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="İş Tecrübesi"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mesajınız"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Başvuru Yap
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Dealership; 