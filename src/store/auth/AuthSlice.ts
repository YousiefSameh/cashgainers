import { TLoading } from "@customTypes";
import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
  user: {
    identifier: string;
  } | null;
  isAuthenticated: boolean;
  loading: TLoading;
  error: string | null;
}

const initialState: IAuthState = {
  user: null,
  isAuthenticated: false,
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = "pending";
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = "succeeded";
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    loginFailure: (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
export const { loginRequest, loginSuccess, loginFailure, logout } =
  authSlice.actions;
