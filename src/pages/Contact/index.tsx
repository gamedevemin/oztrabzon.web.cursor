import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useDispatch } from 'react-redux';
import { showToast } from '../../store/slices/uiSlice';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
    dispatch(showToast({
      message: 'Mesajınız başarıyla gönderildi',
      type: 'success',
    }));
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Adres',
      details: ['Trabzon Merkez', 'Türkiye'],
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Telefon',
      details: ['+90 (462) XXX XX XX', '+90 (462) XXX XX XX'],
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'E-posta',
      details: ['info@oztrabzonekmegi.com', 'destek@oztrabzonekmegi.com'],
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 10 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant={isMobile ? 'h3' : 'h2'} gutterBottom fontWeight="bold">
            İletişim
          </Typography>
          <Typography variant="h5">
            Sizden haber almayı çok isteriz
          </Typography>
        </Container>
      </Box>

      {/* Contact Info Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
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
                  {info.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {info.title}
                </Typography>
                {info.details.map((detail, idx) => (
                  <Typography key={idx} variant="body1" color="text.secondary">
                    {detail}
                  </Typography>
                ))}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Form Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            color="primary"
            fontWeight="bold"
            sx={{ mb: 6 }}
          >
            Bize Ulaşın
          </Typography>
          <Paper sx={{ p: 4 }} elevation={2}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Adınız"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Telefon"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                  >
                    Gönder
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>

      {/* Map Section */}
      <Box sx={{ height: 400 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95301.95488921747!2d39.65153735!3d41.0049823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40643c47b4c4c757%3A0x5d3753c5481aafc1!2sTrabzon%2C%20T%C3%BCrkiye!5e0!3m2!1str!2s!4v1647887642324!5m2!1str!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default Contact; 