// authSlice.js
import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    authenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.authenticated = true;
    },
    logout: state => {
      state.token = null;
      state.authenticated = false;
    },
  },
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;
