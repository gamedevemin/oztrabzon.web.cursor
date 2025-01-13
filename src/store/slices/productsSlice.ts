import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  featured: boolean;
}

interface ProductsState {
  items: Product[];
  featured: Product[];
  loading: boolean;
  error: string | null;
  filters: {
    category: string | null;
    minPrice: number | null;
    maxPrice: number | null;
    search: string;
  };
}

const initialState: ProductsState = {
  items: [],
  featured: [],
  loading: false,
  error: null,
  filters: {
    category: null,
    minPrice: null,
    maxPrice: null,
    search: '',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      state.loading = false;
      state.items = action.payload;
      state.featured = action.payload.filter(product => product.featured);
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<ProductsState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  setFilters,
  clearFilters,
} = productsSlice.actions;

export default productsSlice.reducer; 