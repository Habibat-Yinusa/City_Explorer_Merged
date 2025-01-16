import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { openHours } from "../types/hours.types";
import { Events } from "../types/events.types";
import { Promos } from "../types/promo.types";
import { Items } from "../types/items.types";

export interface UserDetails {
  id: string;
  _id?: string;
  role: "user" | "business";
  username?: string;
  description?: string;
  email: string;
  name?: string;
  category?: string;
  logo?: string;
  phone?: string;
  items?: Items;
  location?: string;
  openHours?: openHours;
  events?: Events;
  promo?: Promos;
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
      localStorage.clear();
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
export const selectCurrentBusinessId = (state: RootState) =>
  state.user.details?._id;
export const selectCurrentBusinessName = (state: RootState) =>
  state.user.details?.role === "business" ? state.user.details.name : undefined;
export const selectCurrentBusinessDescription = (state: RootState) =>
  state.user.details?.role === "business"
    ? state.user.details.description
    : undefined;
export const selectCurrentBusinessLocation = (state: RootState) =>
  state.user.details?.role === "business"
    ? state.user.details.location
    : undefined;
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
