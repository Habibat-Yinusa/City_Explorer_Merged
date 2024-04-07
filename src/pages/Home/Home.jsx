/* eslint-disable react/no-unescaped-entities */
import { Box, Typography, Grid } from "@mui/material";
import { CenteredBox } from "../../styles/styled-components/styledBox";
import burgerBanner from "../../assets/burgerbanner.svg";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import { KeyboardArrowRight } from "@mui/icons-material";
import "@splidejs/react-splide/css";

const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#ececec" }}>
      <CenteredBox sx={{ backgroundColor: "#758BFD", borderRadius: "30px" }}>
        <CenteredBox
          sx={{
            width: "80%",
            justifyContent: "space-between",
            padding: { xs: ".5em 0", md: "1em 0" },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1em", md: "1.5em", lg: "2em" },
              color: "#fff",
              lineHeight: "1.5em",
              width: { xs: "100%", md: "50%" },
              marginBottom: { xs: "1em", md: "0" },
            }}
          >
            Hurry!!! Jennie's burger is offering 30% discounts on all orders for
            this week.
          </Typography>
          <Box sx={{ width: "50%" }}>
            <img src={burgerBanner} alt="" style={{ width: "100%" }} />
          </Box>
        </CenteredBox>
      </CenteredBox>
      <Box sx={{ flexDirection: "column" }}>
        <CenteredBox
          sx={{
            justifyContent: "space-between",
            marginTop: "2em",
            marginBottom: "2em",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: 700, fontSize: "2em" }}>
            Explore these businesses
          </Typography>
          <KeyboardArrowRight
            sx={{
              fontSize: "2rem",
              cursor: "pointer",
              "&:hover": { color: "#6c6c6c" },
            }}
          />
        </CenteredBox>

        <Grid container spacing={2}>
          {businesses.map((item) => (
            <Grid item xs={3.1} sm={2.5} md={2.6} lg={2.3} key={item.id}>
              <CenteredBox
                sx={{
                  flexDirection: "column",
                  cursor: "pointer",
                  // width: { xs: "6em", sm: "7em", md: "7.5em", lg: "10em" },
                  width: "100%",
                  marginTop: "2em",
                  margin: "0 1em",
                }}
              >
                <img src={item.image} style={{ width: "100%" }} />
                <Typography variant="body2" sx={{ fontSize: ".9rem" }}>
                  {item.name}
                </Typography>
              </CenteredBox>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2} sx={{ marginTop: "5em" }}>
          {interests.map((item) => (
            <Grid item xs={7} sm={6} md={4} key={item.id}>
              <CenteredBox
                sx={{
                  borderRadius: "20px",
                  padding: { xs: "1em", md: ".8em 1em" },
                  // width: "100%",
                  flexDirection: "column",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                  // margin: "0 2em",
                  maxWidth: {
                    xs: "14em",
                    sm: "16em",
                    md: "18em",
                    lg: "20em",
                  },
                  // width: "20em",
                  // minWidth: "18em",
                }}
              >
                <CenteredBox sx={{ width: "100%", flexDirection: "column" }}>
                  <Box
                    sx={{
                      // width: {
                      //   xs: "12em",
                      //   sm: "14em",
                      //   md: "16em",
                      //   lg: "18em",
                      // },
                      width: "100%",
                      borderRadius: "30px",
                    }}
                  >
                    <img src={item.image} alt="" style={{ width: "100%" }} />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: { xs: ".7em", lg: ".9rem" } }}
                  >
                    {item.text}
                  </Typography>
                </CenteredBox>
              </CenteredBox>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const businesses = [
  {
    id: 1,
    name: "jame's cafe",
    image: img1,
  },
  {
    id: 2,
    name: "jame's cafe",
    image: img1,
  },
  {
    id: 3,
    name: "jame's cafe",
    image: img1,
  },
  {
    id: 4,
    name: "jame's cafe",
    image: img1,
  },
  {
    id: 5,
    name: "jame's cafe",
    image: img1,
  },
];

const interests = [
  {
    id: 1,
    text: "Capital Block is having an event this weekend that might interest you.",
    image: img2,
  },
  {
    id: 2,
    text: "Capital Block is having an event this weekend that might interest you.",
    image: img2,
  },
  {
    id: 3,
    text: "Capital Block is having an event this weekend that might interest you.",
    image: img2,
  },
  {
    id: 4,
    text: "Capital Block is having an event this weekend that might interest you.",
    image: img2,
  },
  {
    id: 5,
    text: "Capital Block is having an event this weekend that might interest you.",
    image: img2,
  },
];

export default Home;
