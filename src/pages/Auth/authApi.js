import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_APP_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user?.user?.token;
    const url = headers.get("x-request-url"); // Get the current request URL

    if (token && !url.endsWith("/login") && !url.endsWith("/signup")) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const authApi = createApi({
  baseQuery,
  refetchOnReconnect: true,
  reducerPath: "cityAuthApi",
  tagTypes: ["Users", "Businesses", "Chatbot"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (values) => ({
        url: "/user/login",
        method: "POST",
        body: { ...values },
      }),
    }),
    register: builder.mutation({
      query: (values) => ({
        url: "/user/signup",
        method: "POST",
        body: { ...values },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
