import { api } from "../../store/api";

const apiSliceWithTags = api.enhanceEndpoints({
  addTagTypes: ["Business"],
});

const businessApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({}),
});
