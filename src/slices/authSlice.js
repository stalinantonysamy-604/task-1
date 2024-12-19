import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,  //user not logged in
  user: null, // user set null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {             //handle state changes
    login: (state, action) => {
      state.isAuthenticated = true;    //loggin in
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;  //logged out
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
