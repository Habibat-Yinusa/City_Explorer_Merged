import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface UserDetails {
  id: string;
  role: "user" | "business";
  username?: string;
  email: string;
  name?: string;
  category?: string;
  logo?: string;
  phone?: string;
  items?: Array<{
    name: string;
    description: string;
    price: string;
    image: string;
    _id: string;
  }>;
  location?: string;
  openHours?: any[];
  events?: any[];
  promo?: Array<{
    name: string;
    description: string;
    timeValid: string;
    _id: string;
  }>;
}

export interface UserState {
  details: UserDetails | null;
  access_token: string;
}

const initialState: UserState = {
  details: null,
  access_token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ token: string; details: UserDetails }>
    ) => {
      const { token, details } = action.payload;
      state.details = details;
      state.access_token = token;
      localStorage.setItem("userState", JSON.stringify(state));
    },
    logout: (state) => {
      state.details = null;
      state.access_token = "";
      localStorage.removeItem("userState");
    },
  },
});

export const { login, logout } = userSlice.actions;

export const userReducer = userSlice.reducer;

// Selectors
export const selectCurrentUser = (state: RootState) => state.user.details;
export const selectCurrentUserRole = (state: RootState) =>
  state.user.details?.role;
export const selectCurrentUserId = (state: RootState) => state.user.details?.id;
export const selectCurrentUsername = (state: RootState) => {
  const details = state.user.details;
  return details?.role === "user" ? details.username : details?.name;
};
export const selectCurrentUserEmail = (state: RootState) =>
  state.user.details?.email;
export const selectCurrentBusinessName = (state: RootState) =>
  state.user.details?.role === "business" ? state.user.details.name : undefined;
export const selectCurrentBusinessCategory = (state: RootState) =>
  state.user.details?.role === "business"
    ? state.user.details.category
    : undefined;
export const selectCurrentBusinessItems = (state: RootState) =>
  state.user.details?.role === "business"
    ? state.user.details.items
    : undefined;
export const selectCurrentBusinessPromos = (state: RootState) =>
  state.user.details?.role === "business"
    ? state.user.details.promo
    : undefined;
