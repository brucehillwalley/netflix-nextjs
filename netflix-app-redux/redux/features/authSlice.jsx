import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: "",
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload;
    },
    // registerSuccess: (state, { payload }) => {
    //   state.loading = false
    //   state.user = payload.data.username
    //   state.token = payload.token
    // },
    logoutSuccess: (state) => {
      state.currentUser = "";
      state.loading = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
  fetchFail,
} = authSlice.actions;

export default authSlice.reducer;
