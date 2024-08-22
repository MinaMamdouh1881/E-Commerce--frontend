import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoading } from './UserSlice';

export const getData = createAsyncThunk(
  'shop/getData',
  async (action, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const res = await axios.get(`${url}${action}`);
      dispatch(setLoading(false));
      return res.data;
    } catch (error) {
      dispatch(setLoading(false));
      return Promise.reject(error);
    }
  }
);

const url = 'https://ecommerce2-3qot4z29.b4a.run/';

const ShopSlice = createSlice({
  name: 'shop',
  initialState: {
    url,
    mainData: [],
    singleData: JSON.parse(window.localStorage.getItem('singleProduct')),
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.mainData = action.payload.products;
    });
    builder.addCase(getData.rejected, (state, action) => {
      console.log(action.error.message);
      
    });
  },
});

export default ShopSlice.reducer;
