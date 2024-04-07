import React from "react";
import {
  Box,
  Typography,
  FormControl,
  TextField,
  CircularProgress,
} from "@mui/material";
import { CenteredBox } from "../../styles/styled-components/styledBox";
import { FilledButton } from "../../styles/styled-components/styledButtons";

const ExploreAi = () => {
  const [messages, setMessages] = React.useState([]);
  const [newMessage, setNewMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);

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
          body: JSON.stringify({ message: newMessage }),
        }
      );
      const data = await response.json();
      setMessages([
        ...messages,
        { text: newMessage, type: "sent" },
        { text: data, type: "received" },
      ]);
      setNewMessage("");
      console.log(data);
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
            height: "62vh",
            overflowY: "auto",
            scrollbarWidth: "none",
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {messages?.map((message, index) => (
            <Typography
              variant="body2"
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
            </Typography>
          ))}
        </CenteredBox>
        <Box sx={{ width: "100%", paddingBottom: "1em" }}>
          <FormControl error fullWidth sx={{ marginTop: "1em" }}>
            <TextField
              label="Type in your message"
              id="text"
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
          </FormControl>
          <FilledButton
            onClick={sendMessage}
            sx={{ width: "100%", marginTop: ".5em" }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Send"}
          </FilledButton>
        </Box>
      </CenteredBox>
    </Box>
  );
};

export default ExploreAi;
