import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

const baseUrl = import.meta.env.VITE_APP_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const access_token = (getState() as RootState)?.user.user.token;

    if (access_token) {
      headers.set("Authorization", `Bearer ${access_token}`);
    }

    return headers;
  },
});

export const cityApi = createApi({
  baseQuery,
  refetchOnReconnect: true,
  reducerPath: "cityApi",
  tagTypes: ["Users", "Business", "Events", "Chatbot"],
  endpoints: () => ({}),
});
