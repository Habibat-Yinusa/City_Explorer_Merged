import { Box, Typography } from "@mui/material";
import aboutIcon from "../../../assets/aboutImg.svg";

const About = () => {
  return (
    <Box sx={{ marginTop: "5em" }} id="home">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
        id="about"
      >
        <Box
          sx={{
            width: { xs: "100%", md: "42%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2rem", md: "2.3rem", lg: "2.5rem" },
              fontWeight: 800,
            }}
          >
            About <span style={{ color: "#2085BE" }}>CityExplorer</span>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: ".9rem", md: "1rem" },
              margin: "2em 0",
              lineHeight: "30px",
            }}
          >
            City Explorer is a smart platform that helps people discover
            restaurants, events, and businesses in their city with AI-powered
            recommendations. It personalizes suggestions based on location and
            interests, making exploration seamless and efficient. Users can
            easily navigate to places, access real-time insights, and plan
            experiences effortlessly, offering a more intuitive alternative to
            traditional search methods.
          </Typography>
          {/* <Typography
            variant="body2"
            sx={{
              fontSize: { xs: ".9rem", md: "1rem" },
              margin: "1em 0",
              lineHeight: "30px",
            }}
          >
            This platform goes beyond traditional means of communication by
            incorporating SMS functionality, enabling even those in remote,
            rural areas with limited internet access to stay informed. Whether
            it's agricultural insights, educational updates, financial
            advisories, or more, ConnectED transcends geographical barriers to
            bring timely and relevant information to diverse populations.
          </Typography> */}
        </Box>
        <Box sx={{ width: { xs: "22em", sm: "28em", md: "35em" } }}>
          <img src={aboutIcon} style={{ width: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
