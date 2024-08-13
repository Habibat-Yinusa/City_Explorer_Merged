import { cityApi } from "../../store/api";

const apiSliceWithTags = cityApi.enhanceEndpoints({
  addTagTypes: ["Business", "Events"],
});

const businessApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getBusinesses: builder.query({
      query: () => "/business",
      providesTags: ["Business"],
    }),
    getEvents: builder.query({
      query: () => "/business/events",
      provideTags: ["Business", "Events"],
    }),
  }),
});

export const { useGetBusinessesQuery, useGetEventsQuery } = businessApiSlice;
