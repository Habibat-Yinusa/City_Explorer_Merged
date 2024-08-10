import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const access_token = getState().user?.user?.token;
    if (access_token) {
      headers.set("authorization", `Bearer ${access_token}`);
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
