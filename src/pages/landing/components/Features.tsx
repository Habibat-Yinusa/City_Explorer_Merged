import { Box, Typography } from "@mui/material";
// import smsIcon from "../../../assets/icons/sms-icon.svg";
// import monitorIcon from "../../../assets/icons/monitor-icon.svg";
// import questionIcon from "../../../assets/icons/question-icon.svg";
// import contentIcon from "../../../assets/icons/content-icon.svg";

const Features = () => {
  return (
    <Box sx={{ margin: "5em 0" }}>
      <Box id="features" sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "2rem", md: "2.3rem", lg: "2.5rem" },
            fontWeight: 800,
          }}
        >
          Our <span style={{ color: "#2085BE" }}>Features</span>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: ".9rem", md: "1rem" },
            margin: "3em 0",
            lineHeight: "30px",
          }}
        >
          City Explorer makes discovering local events, businesses, and
          experiences seamless and engaging.
        </Typography>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 4,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {featureCards.map((card) => (
              <Box
                key={card.id}
                sx={{
                  display: { xs: "flex", md: "block" },
                  justifyContent: "center",
                  height: "100%",
                  flex: 1,
                }}
              >
                <Box
                  sx={{
                    maxWidth: "500px",
                    padding: "2.5em",
                    borderRadius: "24px",
                    display: "flex",
                    alignItems: "start",
                    gap: 2,
                    height: "100%",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    minHeight: "150px", // Ensure all cards have the same minimum height
                  }}
                >
                  <Box sx={{ width: { xs: "2.5em", md: "9em" } }}>
                    {/* <img src={card.icon} style={{ width: "100%" }} /> */}
                  </Box>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: "1rem", md: "1.3rem" },
                        lineHeight: "30px",
                        fontWeight: 700,
                        marginBottom: "1em",
                        textTransform: "uppercase",
                        color: "#000",
                      }}
                    >
                      {card.label}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: ".8rem", md: "1rem" },
                        lineHeight: "22px",
                        color: "#000",
                      }}
                    >
                      {card.text}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const featureCards = [
  {
    id: 1,
    // icon: smsIcon,
    label: "Real Time Update ",
    text: `City Explorer makes discovering local events, businesses, and experiences seamless and engaging.  
`,
  },
  {
    id: 2,
    // icon: monitorIcon,
    label: "AI Integration",
    text: `Enjoy personalized suggestions based on your interests, location, and past activities. Our smart system curates the best experiences, ensuring you always find something exciting.  
`,
  },
  {
    id: 3,
    // icon: questionIcon,
    label: "Event Listing",
    text: `Explore a curated selection of events, from concerts to networking meetups. Easily browse, book, and attend events that match your preferences, all in one place.`,
  },
];

export default Features;
