import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Snackbar,
  Alert,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/slices/cartSlice';
import { showToast } from '../../store/slices/uiSlice';

// Mock data - daha sonra API'den gelecek
const mockProducts = [
  {
    id: 1,
    name: 'Trabzon Ekmeği',
    description: 'Geleneksel tarifle hazırlanan enfes Trabzon ekmeği',
    price: 15,
    image: '/images/trabzon-ekmegi.jpg',
    category: 'Ekmek',
    stock: 100,
  },
  {
    id: 2,
    name: 'Vakfıkebir Ekmeği',
    description: 'Özel mayalama yöntemiyle hazırlanan Vakfıkebir ekmeği',
    price: 25,
    image: '/images/vakfikebir-ekmegi.jpg',
    category: 'Ekmek',
    stock: 50,
  },
  {
    id: 3,
    name: 'Tam Buğday Ekmeği',
    description: 'Sağlıklı ve besleyici tam buğday ekmeği',
    price: 18,
    image: '/images/tam-bugday-ekmegi.jpg',
    category: 'Ekmek',
    stock: 75,
  },
  {
    id: 4,
    name: 'Çavdar Ekmeği',
    description: 'Lezzetli ve sağlıklı çavdar ekmeği',
    price: 20,
    image: '/images/cavdar-ekmegi.jpg',
    category: 'Ekmek',
    stock: 60,
  },
  {
    id: 5,
    name: 'Kepekli Ekmek',
    description: 'Lifli ve besleyici kepekli ekmek',
    price: 16,
    image: '/images/kepekli-ekmek.jpg',
    category: 'Ekmek',
    stock: 80,
  },
  {
    id: 6,
    name: 'Mini Ekmek',
    description: 'Tek kişilik mini boy Trabzon ekmeği',
    price: 8,
    image: '/images/mini-ekmek.jpg',
    category: 'Ekmek',
    stock: 120,
  },
];

const Products = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleAddToCart = (product: typeof mockProducts[0]) => {
    dispatch(addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    }));
    dispatch(showToast({
      message: 'Ürün sepete eklendi',
      type: 'success',
    }));
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  const filteredAndSortedProducts = mockProducts
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom>
          Ürünlerimiz
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Ürün Ara"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Sırala</InputLabel>
              <Select value={sortBy} label="Sırala" onChange={handleSortChange}>
                <MenuItem value="">Varsayılan</MenuItem>
                <MenuItem value="price-asc">Fiyat (Artan)</MenuItem>
                <MenuItem value="price-desc">Fiyat (Azalan)</MenuItem>
                <MenuItem value="name-asc">İsim (A-Z)</MenuItem>
                <MenuItem value="name-desc">İsim (Z-A)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={4}>
        {filteredAndSortedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="260"
                image={product.image}
                alt={product.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" color="primary">
                    {product.price} ₺
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAddToCart(product)}
                  >
                    Sepete Ekle
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products; 