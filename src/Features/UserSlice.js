import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://ecommerce2-3qot4z29.b4a.run/';

export const loginHandler = createAsyncThunk(
  'user/loginHandler',
  async (form, { getState }) => {
    console.log(getState());

    try {
      const res = await axios({
        method: 'Post',
        url: `${url}login`,
        data: { email: form.email, password: form.password },
      });
      if (res.data.success) {
        return res.data;
      }
      return Promise.reject(res.data.msg);
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
export const logOutHandler = createAsyncThunk(
  'user/logOutHandler',
  async () => {
    console.log(localStorage.getItem('email'));
    console.log(JSON.parse(localStorage.getItem('cart')));

    try {
      const res = await axios({
        method: 'PUT',
        url: `${url}savecart`,
        data: {
          email: localStorage.getItem('email'),
          cartItems: JSON.parse(localStorage.getItem('cart')),
        },
      });
      console.log(res);
      if (res.data.success) {
        return res.data;
      }
      return Promise.reject(res.data.msg);
    } catch (error) {
      console.log(error);

      return Promise.reject(error);
    }
  }
);
export const signUpHandler = createAsyncThunk(
  'user/signUpHandler',
  async (form) => {
    try {
      const res = await axios({
        method: 'Post',
        url: `${url}signup`,
        data: form,
      });
      if (res.data.success) {
        return res.data.email;
      }
      return Promise.reject(res.data.msg);
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    email: window.localStorage.getItem('email'),
    error: '',
    alert: false,
    cartItems: JSON.parse(localStorage.getItem('cart')),
    total: JSON.parse(localStorage.getItem('cart'))?.reduce((total, item) => {
      return total + item.newPrice * item.amount;
    }, 0),
    loading: false,
  },
  reducers: {
    closeError: (state) => {
      state.alert = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    increaseAmount: (state, action) => {
      state.cartItems.map((item) =>
        item._id === action.payload ? ++item.amount : item
      );
      window.localStorage.setItem('cart', JSON.stringify(state.cartItems));
      state.total = JSON.parse(localStorage.getItem('cart')).reduce(
        (total, item) => {
          return total + item.newPrice * item.amount;
        },
        0
      );
    },
    decreaseAmount: (state, action) => {
      if (action.payload.amount === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
      } else {
        state.cartItems.map((item) =>
          item._id === action.payload._id ? --item.amount : item
        );
      }
      window.localStorage.setItem('cart', JSON.stringify(state.cartItems));
      state.total = JSON.parse(localStorage.getItem('cart')).reduce(
        (total, item) => {
          return total + item.newPrice * item.amount;
        },
        0
      );
    },
    addToCart: (state, action) => {

      const cart = JSON.parse(localStorage.getItem('cart'))
        ? JSON.parse(localStorage.getItem('cart'))
        : [];

      if (!cart.find((el) => el._id === action.payload._id)) {
        cart.push(action.payload);
        localStorage.setItem('cart', JSON.stringify(cart));
      }
      state.cartItems = JSON.parse(localStorage.getItem('cart'));
      state.total = JSON.parse(localStorage.getItem('cart')).reduce(
        (total, item) => {
          return total + item.newPrice * item.amount;
        },
        0
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginHandler.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginHandler.fulfilled, (state, { payload }) => {
      state.isLogin = true;
      window.localStorage.setItem('email', payload.email);
      window.localStorage.setItem('cart', JSON.stringify(payload.cartItems));
      state.loading = false;
      window.location.replace('/');
    });
    builder.addCase(loginHandler.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.alert = true;
    });
    builder.addCase(logOutHandler.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(logOutHandler.fulfilled, (state) => {
      state.isLogin = false;
      window.localStorage.removeItem('email');
      window.localStorage.removeItem('cart');
      state.loading = false;
      window.location.replace('/login');
    });
    builder.addCase(logOutHandler.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.alert = true;
    });
    builder.addCase(signUpHandler.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUpHandler.fulfilled, (state, { payload }) => {
      state.isLogin = true;
      window.localStorage.setItem('email', payload);
      window.localStorage.setItem('cart', JSON.stringify([]));
      state.email = payload;
      window.location.replace('/');
    });
    builder.addCase(signUpHandler.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.alert = true;
    });
  },
});
export const {
  closeError,
  increaseAmount,
  decreaseAmount,
  addToCart,
  setLoading,
} = userSlice.actions;
export default userSlice.reducer;
