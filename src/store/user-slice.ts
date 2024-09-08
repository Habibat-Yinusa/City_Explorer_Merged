import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface userState {
  user: any;
  access_token: string;
}

const initialState: userState = {
  user: null,
  access_token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token } = action.payload;
      state.user = action.payload;
      state.access_token = token;
      localStorage.setItem("userState", JSON.stringify(state));
    },
    logout: (state) => {
      state.user = null;
      state.access_token = "";
      localStorage.clear();
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.user.user;
export const selectCurrentUsername = (state: RootState) =>
  state.user.user.username;
export const selectCurrentBusinessName = (state: RootState) =>
  state.user.user.businessName;
export const selectCurrentUserRole = (state: RootState) => state.user.user.role;
export const selectCurrentUserId = (state: RootState) => state.user.user.id;
