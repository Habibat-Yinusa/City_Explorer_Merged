import { cityApi } from "../../store/api";
import { ChatBot } from "../../types/chatbot.types";

const apiSliceWithTags = cityApi.enhanceEndpoints({
  addTagTypes: ["ChatBot"],
});

const chatApiSlice = apiSliceWithTags.injectEndpoints({
  endpoints: (builder) => ({
    chatWithBot: builder.mutation<ChatBot, { message: string; _id: string }>({
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
