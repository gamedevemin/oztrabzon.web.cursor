import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

// Mock blog posts - daha sonra API'den gelecek
const blogPosts = [
  {
    id: 1,
    title: 'Trabzon Ekmeğinin Tarihi',
    excerpt: 'Trabzon ekmeğinin yüzyıllara dayanan zengin tarihini ve geleneksel yapım tekniklerini keşfedin.',
    content: '',
    image: '/images/blog/history.jpg',
    date: new Date('2024-03-10'),
    author: 'Ahmet Yılmaz',
    category: 'Tarih',
    tags: ['Trabzon Ekmeği', 'Tarih', 'Gelenek'],
  },
  {
    id: 2,
    title: 'Ekmeğin Yapım Aşamaları',
    excerpt: 'Geleneksel Trabzon ekmeğinin yapım aşamalarını ve püf noktalarını öğrenin.',
    content: '',
    image: '/images/blog/making.jpg',
    date: new Date('2024-03-08'),
    author: 'Mehmet Demir',
    category: 'Üretim',
    tags: ['Yapım', 'Teknik', 'Püf Noktaları'],
  },
  {
    id: 3,
    title: 'Sağlıklı Beslenme ve Ekmek',
    excerpt: 'Sağlıklı beslenme düzeninde ekmeğin yeri ve önemi hakkında bilmeniz gerekenler.',
    content: '',
    image: '/images/blog/health.jpg',
    date: new Date('2024-03-05'),
    author: 'Ayşe Kaya',
    category: 'Sağlık',
    tags: ['Sağlık', 'Beslenme', 'Diyet'],
  },
  {
    id: 4,
    title: 'Ekmek Saklama Yöntemleri',
    excerpt: 'Ekmeğinizi daha uzun süre taze tutmak için profesyonel saklama yöntemleri.',
    content: '',
    image: '/images/blog/storage.jpg',
    date: new Date('2024-03-01'),
    author: 'Ali Yıldız',
    category: 'İpuçları',
    tags: ['Saklama', 'Taze', 'İpuçları'],
  },
  {
    id: 5,
    title: 'Trabzon Ekmeği Tarifleri',
    excerpt: 'Trabzon ekmeği ile yapabileceğiniz lezzetli tarifler ve öneriler.',
    content: '',
    image: '/images/blog/recipes.jpg',
    date: new Date('2024-02-28'),
    author: 'Zeynep Aydın',
    category: 'Tarifler',
    tags: ['Tarifler', 'Mutfak', 'Yemek'],
  },
  {
    id: 6,
    title: 'Ekmeğin Besin Değerleri',
    excerpt: 'Trabzon ekmeğinin besin değerleri ve sağlığa faydaları hakkında detaylı bilgi.',
    content: '',
    image: '/images/blog/nutrition.jpg',
    date: new Date('2024-02-25'),
    author: 'Dr. Fatma Şahin',
    category: 'Sağlık',
    tags: ['Besin Değerleri', 'Sağlık', 'Beslenme'],
  },
];

const Blog = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
            Blog
          </Typography>
          <Typography variant="h5">
            Ekmek kültürü ve lezzeti hakkında her şey
          </Typography>
        </Container>
      </Box>

      {/* Blog Posts Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={post.category}
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {format(post.date, 'd MMMM yyyy', { locale: tr })}
                    </Typography>
                  </Box>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.excerpt}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Yazar: {post.author}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Devamını Oku
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog; 