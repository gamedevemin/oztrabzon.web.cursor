import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

interface UIState {
  toast: Toast | null;
  loading: boolean;
  mobileMenuOpen: boolean;
}

const initialState: UIState = {
  toast: null,
  loading: false,
  mobileMenuOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<Toast>) => {
      state.toast = action.payload;
    },
    hideToast: (state) => {
      state.toast = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
  },
});

export const { showToast, hideToast, setLoading, toggleMobileMenu } = uiSlice.actions;
export default uiSlice.reducer; 