import { configureStore } from '@reduxjs/toolkit';
import ShopReducer from './src/Features/ShopSlice';
import userReducer from './src/Features/UserSlice';
const store = configureStore({
  reducer: {
    shop: ShopReducer,
    user: userReducer,
  },
});

export default store;
