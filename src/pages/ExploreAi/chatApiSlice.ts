import { cityApi } from "../../store/api";

const apiSliceWithTags = cityApi.enhanceEndpoints({
  addTagTypes: ["ChatBot"],
});

const chatApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    chatWithBot: builder.mutation<string, { message: string; _id: string }>({
      query: (values) => ({
        url: "/chatbot",
        method: "POST",
        body: { ...values },
      }),
      invalidatesTags: ["ChatBot"],
    }),
  }),
});

export const { useChatWithBotMutation } = chatApiSlice;
