import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import { authApi } from "../pages/Auth/authApi";
import { cityApi } from "./api";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [cityApi.reducerPath]: cityApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(cityApi.middleware), // caching middleware
  devTools: true, // developer tools middleware
});
