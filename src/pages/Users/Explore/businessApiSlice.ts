import { cityApi } from "../../../store/api";
import { Business } from "../../../types/business.types";
import { Events } from "../../../types/events.types";

const apiSliceWithTags = cityApi.enhanceEndpoints({
  addTagTypes: ["Business", "Events"],
});

const businessApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getBusinesses: builder.query<Business[], void>({
      query: () => "/business",
      providesTags: ["Business"],
    }),
    getEvents: builder.query<Events[], void>({
      query: () => "/business/events",
      providesTags: ["Business", "Events"],
    }),
  }),
});

export const { useGetBusinessesQuery, useGetEventsQuery } = businessApiSlice;
