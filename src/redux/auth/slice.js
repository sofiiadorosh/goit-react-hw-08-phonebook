import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        return {
          ...state,
          user: { ...action.payload.user },
          token: action.payload.token,
          isLoggedIn: true,
        };
      })
      .addCase(logIn.fulfilled, (state, action) => {
        return {
          ...state,
          user: { ...action.payload.user },
          token: action.payload.token,
          isLoggedIn: true,
        };
      })
      .addCase(logOut.fulfilled, (state, action) => {
        return {
          ...state,
          user: { name: null, email: null },
          token: null,
          isLoggedIn: false,
        };
      })
      .addCase(refreshUser.pending, state => {
        return { ...state, isRefreshing: true };
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        return {
          ...state,
          user: { ...action.payload },
          isLoggedIn: true,
          isRefreshing: false,
        };
      })
      .addCase(refreshUser.rejected, state => {
        return { ...state, isRefreshing: false };
      }),
});

export const authReducer = authSlice.reducer;
