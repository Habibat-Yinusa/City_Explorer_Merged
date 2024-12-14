import { cityApi } from "../../../store/api";
import { Business, Businesses } from "../../../types/business.types";
import { Events } from "../../../types/events.types";
import { PromosData } from "../../../types/promo.types";

const apiSliceWithTags = cityApi.enhanceEndpoints({
  addTagTypes: ["Business", "Events", "Promos"],
});

const businessApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getBusinesses: builder.query<Businesses, void>({
      query: () => "/business",
      providesTags: ["Business"],
    }),
    getBusiness: builder.query<Business, string>({
      query: (business_id) => `/business/${business_id}`,
      providesTags: ["Business"],
    }),
    getEvents: builder.query<Events[], void>({
      query: () => "/business/events",
      providesTags: ["Business", "Events"],
    }),
    getAllEvents: builder.query<Events, void>({
      query: () => "/events",
      providesTags: ["Business", "Events"],
    }),
    getAllPromos: builder.query<PromosData[], void>({
      query: () => "/promos",
      providesTags: ["Business", "Promos"],
    }),
  }),
});

export const {
  useGetBusinessesQuery,
  useGetBusinessQuery,
  useGetEventsQuery,
  useGetAllEventsQuery,
  useGetAllPromosQuery,
} = businessApiSlice;
