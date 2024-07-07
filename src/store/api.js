import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = import.meta.env.VITE_APP_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const api = createApi({
  baseQuery,
  refetchOnReconnect: true,
  reducerPath: "cityApi",
  tagTypes: ["Users", "Businesses", "Chatbot"],
  endpoints: () => ({}),
});
