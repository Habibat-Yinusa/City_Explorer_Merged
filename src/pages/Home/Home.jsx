/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from "@mui/material";
import { CenteredBox } from "../../styles/styled-components/styledBox";
import burgerBanner from "../../assets/burgerbanner.svg";
import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Home = () => {
  return (
    <Box>
      <CenteredBox sx={{ backgroundColor: "#758BFD", borderRadius: "30px" }}>
        <CenteredBox
          sx={{
            width: "80%",
            justifyContent: "space-between",
            padding: "1em 0",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: "2em",
              color: "#fff",
              lineHeight: "1.5em",
              width: "50%",
            }}
          >
            Hurry!!! Jennie's burger is offering 30% discounts on all orders for
            this week.
          </Typography>
          <Box sx={{ width: "18em" }}>
            <img src={burgerBanner} alt="" style={{ width: "100%" }} />
          </Box>
        </CenteredBox>
      </CenteredBox>
      <Box sx={{ margin: "1em 0" }}>
        <CenteredBox
          sx={{
            justifyContent: "space-between",
            marginTop: "2em",
            marginBottom: "1em",
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
        <Box sx={{ margin: "1em 0", overflowX: "hidden" }}>
          <CenteredBox
            sx={{
              width: "100%",
              justifyContent: "space-between",
              margin: "2em 0",
            }}
          >
            <Splide
              options={{
                perPage: 6,
                arrows: false,
                pagination: false,
                drag: true,
              }}
              style={{ maxWidth: "100%", margin: "0 auto" }}
            >
              {businesses.map((item) => (
                <SplideSlide key={item.id}>
                  <CenteredBox
                    sx={{
                      flexDirection: "column",
                      cursor: "pointer",
                      width: "12em",
                    }}
                  >
                    <img src={item.image} style={{ width: "100%" }} />
                    <Typography variant="body2" sx={{ fontSize: ".9rem" }}>
                      {item.name}
                    </Typography>
                  </CenteredBox>
                </SplideSlide>
              ))}
            </Splide>
          </CenteredBox>
        </Box>

        <CenteredBox
          sx={{ justifyContent: "space-between", overflowX: "hidden" }}
        >
          <Splide
            options={{
              perPage: 3,
              arrows: false,
              pagination: false,
              drag: true,
            }}
            style={{ maxWidth: "100%", margin: "0 auto" }}
          >
            {interests.map((item) => (
              <SplideSlide key={item.id}>
                <CenteredBox
                  sx={{
                    borderRadius: "20px",
                    padding: ".8em 1em",
                    margin: "0 1em",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                  }}
                >
                  <Box sx={{ width: "18em", borderRadius: "30px" }}>
                    <img src={item.image} alt="" style={{ width: "100%" }} />
                  </Box>
                  <Typography variant="body2" sx={{ fontSize: ".9rem" }}>
                    {item.text}
                  </Typography>
                </CenteredBox>
              </SplideSlide>
            ))}
          </Splide>
        </CenteredBox>
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
  {
    id: 6,
    name: "jame's cafe",
    image: img1,
  },
  {
    id: 7,
    name: "jame's cafe",
    image: img1,
  },
  {
    id: 8,
    name: "jame's cafe",
    image: img1,
  },
  {
    id: 9,
    name: "jame's cafe",
    image: img1,
  },
  {
    id: 10,
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
  {
    id: 6,
    text: "Capital Block is having an event this weekend that might interest you.",
    image: img2,
  },
  {
    id: 7,
    text: "Capital Block is having an event this weekend that might interest you.",
    image: img2,
  },
  {
    id: 8,
    text: "Capital Block is having an event this weekend that might interest you.",
    image: img2,
  },
  {
    id: 9,
    text: "Capital Block is having an event this weekend that might interest you.",
    image: img2,
  },
  {
    id: 10,
    text: "Capital Block is having an event this weekend that might interest you.",
    image: img2,
  },
];

export default Home;
