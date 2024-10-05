import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  isLoading: false,
  isAuthenticated: false,
  IsSideBarOpened: false,
  IsAdmin: false,
};

const counterSlice = createSlice({
  name: "UserActions",
  initialState,
  reducers: {
    SignOut: (state) => {
      state.currentUser = null;
      state.isAuthenticated = false;
      state.IsSideBarOpened = false;
      state.isLoading = false;
      state.error = null;
    },
    DashboardOpened: (state) => {
      state.IsSideBarOpened = !state.IsSideBarOpened;
    },
    SignInSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.IsAdmin = action.payload === "admin" ? true : false;
    },
  },
});

export const { SignOut, DashboardOpened, SignInSuccess } = counterSlice.actions;

export default counterSlice.reducer;
