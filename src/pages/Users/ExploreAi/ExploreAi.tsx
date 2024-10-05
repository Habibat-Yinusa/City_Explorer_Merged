import React from "react";
import { Box, FormControl, TextField } from "@mui/material";
import { CenteredBox } from "../../../styles/styled-components/styledBox";
import { FilledButton } from "../../../styles/styled-components/styledButtons";
import { useSelector } from "react-redux";
import { SendRounded } from "@mui/icons-material";
import { selectCurrentUserId } from "../../../store/user-slice";
import { useFormik } from "formik";
import * as yup from "yup";
import { useChatWithBotMutation } from "./chatApiSlice";
import { aiMessageInput, aiMessageType } from "../../../types/message.types";
import EmptyState from "../../../styles/custom-components/EmptyState";

const ExploreAi = () => {
  const [messages, setMessages] = React.useState<aiMessageType[]>([]);
  const userId = useSelector(selectCurrentUserId);
  const [chatWithBot, { isLoading }] = useChatWithBotMutation();

  const handleMessageSubmit = async (message: string) => {
    try {
      const values: aiMessageInput = {
        message: message,
        _id: userId ? userId : "",
      };
      const response = await chatWithBot(values).unwrap();
      setMessages([
        ...messages,
        { message: values.message, type: "sent" },
        { message: response?.message, type: response?.type },
      ]);
    } catch (error: any) {
      console.error(error);
    }
  };

  const formik = useFormik<aiMessageInput>({
    initialValues: {
      message: "",
      _id: userId ? userId : "",
    },
    validationSchema: yup.object({
      message: yup.string().required("Message is required"),
    }),
    onSubmit: async (values: aiMessageInput) => {
      await handleMessageSubmit(values.message);
      formik.resetForm();
    },
  });

  const handleEmptyStateMessageClick = (message: string) => {
    formik.setFieldValue("message", message);
    handleMessageSubmit(message);
  };

  return (
    <Box>
      {messages.length > 0 ? (
        <CenteredBox
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <CenteredBox
            sx={{
              flexDirection: "column",
              height: "66vh",
              overflowY: "auto",
              scrollbarWidth: "none",
              "::-webkit-scrollbar": {
                display: "none",
              },
              justifyContent: "start",
            }}
          >
            {messages?.map((message, index) => (
              <Box
                // variant="body2"
                sx={{
                  fontSize: "1rem",
                  margin: ".5em",
                  backgroundColor: message.type === "sent" ? "#3884FD" : "#fff",
                  color: message.type === "sent" ? "#fff" : "#000",
                  padding: "1em",
                  borderRadius: "10px",
                  alignSelf:
                    message.type === "sent" ? "flex-end" : "flex-start",
                }}
                key={index}
              >
                {message.message}
              </Box>
            ))}
          </CenteredBox>
        </CenteredBox>
      ) : (
        <EmptyState onMessageClick={handleEmptyStateMessageClick} />
      )}
      <Box
        sx={{
          width: "100%",
          // paddingBottom: "1em",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          // border: "1px solid red",
        }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <FormControl error fullWidth>
          <TextField
            label="Type in your message"
            id="message"
            type="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            fullWidth
          />
        </FormControl>
        <FilledButton
          type="submit"
          sx={{
            // width: "7%",
            // marginTop: ".5em",
            // backgroundColor: "transparent",
            padding: ".8em 2em",
            fontSize: "1rem",
          }}
          disabled={isLoading}
        >
          {isLoading ? (
            // <CircularProgress size={26} color="success" />
            "Sending"
          ) : (
            <SendRounded />
          )}
        </FilledButton>
      </Box>
    </Box>
  );
};

export default ExploreAi;
