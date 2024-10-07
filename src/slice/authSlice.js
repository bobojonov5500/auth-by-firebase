import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  LoggedIn: false,
  isLoading: false,
  user: null,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userSignStart: (state) => {
      state.isLoading = true;
    },
    userSignSuccess: (state, action) => {
      state.LoggedIn = true;
      state.isLoading = false;
      state.user = action.payload;
    },
    userSignFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {
  userSignFailure,
  userSignStart,
  userSignSuccess,
} = authSlice.actions;
export default authSlice.reducer;
