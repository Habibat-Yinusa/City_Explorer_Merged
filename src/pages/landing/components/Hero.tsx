import { Box, Typography } from "@mui/material";
import { FilledButton } from "../../../styles/styled-components/styledButtons";
// import map from "../../../assets/icons/map.svg";
// import { FilledButton } from "../../../custom-components/styled/styledButtons";
import heroBg from "../../../assets/heroBg.svg";

const Hero = () => {
  return (
    <Box
      sx={{
        // marginTop: "5em",
        backgroundImage: `url(${heroBg})`,
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "80%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "start" },
            alignItems: "center",
            width: "100%",
            flexDirection: { xs: "column", md: "row" },
          }}
          id="home"
        >
          <Box
            sx={{
              display: { xs: "flex", md: "block" },
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: { xs: "center", md: "left" },
              width: { xs: "100%", md: "60%" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", md: "2.3rem", lg: "3rem" },
                fontWeight: 800,
              }}
            >
              Discover your city, <br />
              <span style={{ color: "#2085BE" }}>One Adventure of a time.</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: ".9rem", md: "1rem" },
                margin: "1em 0",
                lineHeight: "30px",
                width: { xs: "100%", md: "50%" },
              }}
            >
              City Explorer helps you discover local event, activities &
              business with personalized recommendation.
            </Typography>
            <FilledButton
              sx={{
                borderRadius: "50px",
                padding: "1em",
                fontSize: "1rem",
                margin: { xs: "1em 0", md: "0" },
              }}
            >
              Join Us
            </FilledButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
