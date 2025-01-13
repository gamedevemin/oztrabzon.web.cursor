import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar, Alert } from '@mui/material';
import { RootState } from '../../store';
import { hideToast } from '../../store/slices/uiSlice';

const Toast = () => {
  const dispatch = useDispatch();
  const toast = useSelector((state: RootState) => state.ui.toast);

  const handleClose = () => {
    dispatch(hideToast());
  };

  if (!toast) return null;

  return (
    <Snackbar
      open={!!toast}
      autoHideDuration={toast.duration || 3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        onClose={handleClose}
        severity={toast.type}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {toast.message}
      </Alert>
    </Snackbar>
  );
};

export default Toast; 