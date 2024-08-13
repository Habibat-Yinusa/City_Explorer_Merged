import { configureStore } from "@reduxjs/toolkit";
import { cityApi } from "./api";
import { authApi } from "../pages/Auth/authApiSlice";
import { userReducer } from "./user-slice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [cityApi.reducerPath]: cityApi.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(cityApi.middleware), // caching middleware
  devTools: true, // developer tools middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
