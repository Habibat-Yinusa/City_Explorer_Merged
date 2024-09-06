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

const ExploreAi = () => {
  interface messageType {
    message: string;
    type: string;
  }

  interface messageInput {
    message: string;
    _id: string;
  }

  const [messages, setMessages] = React.useState<messageType[]>([]);
  const userId = useSelector(selectCurrentUserId);
  const [chatWithBot, { isLoading }] = useChatWithBotMutation();
  const formik = useFormik<messageInput>({
    initialValues: {
      message: "",
      _id: userId,
    },
    validationSchema: yup.object({
      message: yup.string().required("Message is required"),
    }),
    onSubmit: async (values: messageInput) => {
      try {
        const response = await chatWithBot(values).unwrap();
        console.log(response);
        setMessages([
          ...messages,
          { message: values.message, type: "sent" },
          { message: response?.message, type: response?.type },
        ]);
        formik.values.message = "";
      } catch (error: any) {
        console.error(error);
      }
    },
  });

  return (
    <Box>
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
                backgroundColor: message.type === "sent" ? "#758BFD" : "#fff",
                color: message.type === "sent" ? "#fff" : "#000",
                padding: "1em",
                borderRadius: "10px",
                alignSelf: message.type === "sent" ? "flex-end" : "flex-start",
              }}
              key={index}
            >
              {message.message}
            </Box>
          ))}
        </CenteredBox>
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
      </CenteredBox>
    </Box>
  );
};

export default ExploreAi;
