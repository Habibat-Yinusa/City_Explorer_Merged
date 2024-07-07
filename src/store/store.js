import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import { authApi } from "../pages/Auth/authApi";

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
