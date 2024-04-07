import { Box } from "@mui/material";
import { CenteredBox } from "../../styles/styled-components/styledBox";
import React, { useEffect } from "react";

const ExploreAi = () => {
  const [messages, setMessages] = React.useState([]);
  const [newMessage, setNewMessage] = React.useState("");

  // const fetchMessages = async () => {
  //   try {
  //     const response = await fetch(
  //       `${import.meta.env.VITE_APP_API_URL}/chatbot`
  //     );
  //     const data = await response.json();
  //     setMessages(data);
  //   } catch (error) {
  //     console.error("Error fetching messages:", error);
  //   }
  // };

  const sendMessage = async () => {
    try {
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
      setMessages([...messages, { text: newMessage, type: "sent" }]);
      setMessages([...messages, { text: data, type: "received" }]);
      setNewMessage("");
      console.log(data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(fetchMessages, 3000); // Fetch messages every 3 seconds
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Box>
      <CenteredBox>
        <div>
          {messages.map((message, index) => (
            <div key={index} className={message.type}>
              {message.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </CenteredBox>
    </Box>
  );
};

export default ExploreAi;
