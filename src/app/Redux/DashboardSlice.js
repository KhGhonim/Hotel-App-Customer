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
      state.IsAdmin = null;

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
