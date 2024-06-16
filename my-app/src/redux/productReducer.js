import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  brands: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const Product_url = 'http://localhost:4000/product/getproducts';
const Brand_url = 'http://localhost:4000/brand/getbrands';

export const fetchProduct = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await axios.get(Product_url);
    return response.data.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
});

export const fetchBrands = createAsyncThunk('products/fetchBrands', async () => {
  try {
    const response = await axios.get(Brand_url);
    return response.data.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
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

export default productSlice.reducer;
