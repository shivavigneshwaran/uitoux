import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  brands: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const Brand_url = 'http://localhost:4000/brand/getbrands';

export const fetchBrands = createAsyncThunk('brands/fetchBrands', async () => {
  try {
    const response = await axios.get(Brand_url);
    return response.data.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
});

const brandSlice = createSlice({
  name: 'brands',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default brandSlice.reducer;
