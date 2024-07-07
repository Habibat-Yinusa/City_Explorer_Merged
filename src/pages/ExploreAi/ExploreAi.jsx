import React from "react";
import { Box, FormControl, TextField, CircularProgress } from "@mui/material";
import { CenteredBox } from "../../styles/styled-components/styledBox";
import { FilledButton } from "../../styles/styled-components/styledButtons";
import { useSelector } from "react-redux";
import { SendRounded } from "@mui/icons-material";

const ExploreAi = () => {
  const [messages, setMessages] = React.useState([]);
  const [newMessage, setNewMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const user = useSelector((state) => state.user.user);

  const sendMessage = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/chatbot`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: newMessage, _id: user.id }),
        }
      );
      const data = await response.json();
      // console.log(data);
      setMessages([
        ...messages,
        { text: newMessage, type: "sent" },
        { text: data, type: "received" },
      ]);
      setNewMessage("");
      // console.log(data);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

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
              {message.text}
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
            // border: "1px solid red",
          }}
        >
          <FormControl error fullWidth sx={{ width: "92%" }}>
            <TextField
              label="Type in your message"
              id="text"
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              fullWidth
            />
          </FormControl>
          <FilledButton
            onClick={sendMessage}
            sx={{
              width: "5%",
              // marginTop: ".5em",
              // backgroundColor: "transparent",
              padding: ".8em 2em",
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={26} /> : <SendRounded />}
          </FilledButton>
        </Box>
      </CenteredBox>
    </Box>
  );
};

export default ExploreAi;
