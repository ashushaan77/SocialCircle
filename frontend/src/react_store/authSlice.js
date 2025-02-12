import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: localStorage.getItem("token") != null ? true : false,
  },

  reducers: {
    getToken: () => {
      return localStorage.getItem("token");
    },
    login: (state, action) => {
      console.log(action.payload);
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { getToken, login, logout } = authSlice.actions;

export default authSlice.reducer;
