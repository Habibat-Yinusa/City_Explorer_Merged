/* eslint-disable react/no-unescaped-entities */
import { Box, Typography, Grid } from "@mui/material";
import { CenteredBox } from "../../styles/styled-components/styledBox";
import burgerBanner from "../../assets/burgerbanner.svg";
// import img1 from "../../assets/img1.svg";
import img2 from "../../assets/img2.svg";
import {
  BuildOutlined,
  DryCleaningOutlined,
  // KeyboardArrowRight,
  LibraryBooksOutlined,
  LocalDrink,
  LocalPizza,
  ShoppingCart,
  StoreOutlined,
  ViewWeekRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { FilledButton } from "../../styles/styled-components/styledButtons";
// import { useGetEventsQuery } from "../Explore/businessSlice";

const Home = () => {
  const navigate = useNavigate();
  // const { data: events, isLoading: isFetchingEvents } = useGetEventsQuery();

  // console.log(events);

  return (
    <Box sx={{ backgroundColor: "#ececec" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: { xs: "90vw", md: "68vw", lg: "75vw" },
            borderRadius: "30px",
            overflow: "hidden",
          }}
        >
          <Splide
            options={{
              width: "100%",
              gap: "1.3em",
              arrows: false,
              pagination: false,
              type: "loop",
              padding: "10%",
              AutoScroll: {
                speed: 1,
                pauseOnHover: true,
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideSlide>
              <CenteredBox
                sx={{
                  backgroundColor: "#758BFD",
                  borderRadius: "30px",
                  maxWidth: { xs: "700px", md: "1000px" },
                  cursor: "pointer",
                }}
                onClick={() => navigate("/home/promos")}
              >
                <CenteredBox
                  sx={{
                    width: "80%",
                    justifyContent: "space-between",
                    padding: { xs: "1em 0", md: "1em 0" },
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: {
                        xs: "1rem",
                        sm: "1.3rem",
                        md: "1.5rem",
                        lg: "2rem",
                      },
                      color: "#fff",
                      lineHeight: "1.5em",
                      width: "60%",
                    }}
                  >
                    Hurry!!! Jennie's burger is offering 30% discounts on all
                    orders for this week.
                  </Typography>
                  <Box
                    sx={{
                      width: { xs: "10em", sm: "12em", md: "15em", lg: "20em" },
                    }}
                  >
                    <img src={burgerBanner} alt="" style={{ width: "100%" }} />
                  </Box>
                </CenteredBox>
              </CenteredBox>
            </SplideSlide>
            <SplideSlide>
              <CenteredBox
                sx={{
                  backgroundColor: "#758BFD",
                  borderRadius: "30px",
                  maxWidth: { xs: "700px", md: "1000px" },
                  cursor: "pointer",
                }}
                onClick={() => navigate("/home/promos")}
              >
                <CenteredBox
                  sx={{
                    width: "80%",
                    justifyContent: "space-between",
                    padding: { xs: "1em 0", md: "1em 0" },
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: {
                        xs: "1rem",
                        sm: "1.3rem",
                        md: "1.5rem",
                        lg: "2rem",
                      },
                      color: "#fff",
                      lineHeight: "1.5em",
                      width: "60%",
                    }}
                  >
                    Hurry!!! Jennie's burger is offering 30% discounts on all
                    orders for this week.
                  </Typography>
                  <Box
                    sx={{
                      width: { xs: "10em", sm: "12em", md: "15em", lg: "20em" },
                    }}
                  >
                    <img src={burgerBanner} alt="" style={{ width: "100%" }} />
                  </Box>
                </CenteredBox>
              </CenteredBox>
            </SplideSlide>
            <SplideSlide>
              <CenteredBox
                sx={{
                  backgroundColor: "#758BFD",
                  borderRadius: "30px",
                  maxWidth: { xs: "700px", md: "1000px" },
                  cursor: "pointer",
                }}
                onClick={() => navigate("/home/promos")}
              >
                <CenteredBox
                  sx={{
                    width: "80%",
                    justifyContent: "space-between",
                    padding: { xs: "1em 0", md: "1em 0" },
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      fontSize: {
                        xs: "1rem",
                        sm: "1.3rem",
                        md: "1.5rem",
                        lg: "2rem",
                      },
                      color: "#fff",
                      lineHeight: "1.5em",
                      width: "60%",
                    }}
                  >
                    Hurry!!! Jennie's burger is offering 30% discounts on all
                    orders for this week.
                  </Typography>
                  <Box
                    sx={{
                      width: { xs: "10em", sm: "12em", md: "15em", lg: "20em" },
                    }}
                  >
                    <img src={burgerBanner} alt="" style={{ width: "100%" }} />
                  </Box>
                </CenteredBox>
              </CenteredBox>
            </SplideSlide>
          </Splide>
        </Box>
      </Box>

      <CenteredBox sx={{ marginTop: "2em", flexDirection: "column" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.7rem", md: "2rem" },
            width: "100%",
          }}
        >
          Categories
        </Typography>
        <Grid container sx={{ margin: "2em 0" }}>
          {categoryCard.map((item) => (
            <Grid
              item
              xs="auto"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
              key={item.id}
            >
              <Box
                sx={{
                  maxWidth: "6em",
                  width: "6em",
                  cursor: "pointer",
                  margin: ".4em 1em",
                }}
                onClick={() => navigate(item.link)}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1em",
                    borderRadius: "15px",
                    // fontSize: "2rem",
                    color: "#758BFD",
                  }}
                >
                  {/* <BuildOutlined sx={{ fontSize: "2rem", color: "#758BFD" }} /> */}
                  {item.icon}
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "1rem",
                    textTransform: "capitalize",
                    textAlign: "center",
                    marginTop: ".3em",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CenteredBox>

      <Box sx={{ flexDirection: "column" }}>
        {/* <CenteredBox
          sx={{
            justifyContent: "space-between",
            marginTop: "1.2em",
            marginBottom: "1.2em",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: 700, fontSize: { xs: "1.7rem", md: "2rem" } }}
          >
            Explore these businesses
          </Typography>
          <KeyboardArrowRight
            sx={{
              fontSize: { xs: "1.7rem", md: "2rem" },
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
        </Grid> */}

        {/* <Grid
          container
          spacing={2}
          sx={{
            // marginTop: "5em",
            marginTop: "1em",
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
            alignItems: "center",
          }}
        > */}
        <Box
          sx={{
            width: { xs: "90vw", md: "68vw", lg: "75vw" },
            borderRadius: "30px",
            overflow: "hidden",
          }}
        >
          <Splide
            options={{
              width: "100%",
              gap: "1em",
              arrows: false,
              pagination: false,
              type: "loop",
              padding: "10%",
              perPage: 2,
              AutoScroll: {
                speed: 1,
                pauseOnHover: true,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {interests?.map((event) => (
              <SplideSlide key={event.id}>
                <CenteredBox
                  sx={{
                    borderRadius: "20px",
                    padding: { xs: "1em", md: ".8em 1em" },
                    flexDirection: "column",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    width: "100%",
                    gap: 3,
                  }}
                >
                  <CenteredBox
                    sx={{
                      width: "100%",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Box sx={{ width: "100%", borderRadius: "30px" }}>
                      <img src={event.image} alt="" style={{ width: "100%" }} />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: { xs: ".7em", md: ".9rem" } }}
                    >
                      {event.text}
                    </Typography>
                    <FilledButton sx={{ width: "100%" }}>
                      Check it out
                    </FilledButton>
                  </CenteredBox>
                </CenteredBox>
              </SplideSlide>
              // </Grid>
            ))}
          </Splide>
        </Box>
        {/* </Grid> */}
      </Box>
    </Box>
  );
};

// const businesses = [
//   {
//     id: 1,
//     name: "jame's cafe",
//     image: img1,
//   },
//   {
//     id: 2,
//     name: "jame's cafe",
//     image: img1,
//   },
//   {
//     id: 3,
//     name: "jame's cafe",
//     image: img1,
//   },
//   {
//     id: 4,
//     name: "jame's cafe",
//     image: img1,
//   },
//   {
//     id: 5,
//     name: "jame's cafe",
//     image: img1,
//   },
// ];

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

const categoryCard = [
  {
    id: 1,
    icon: <BuildOutlined />,
    text: "Auto repairs",
    link: "#",
  },
  {
    id: 2,
    icon: <LocalPizza />,
    text: "Takeout",
    link: "#",
  },
  {
    id: 3,
    icon: <LocalDrink />,
    text: "Smoothies",
    link: "#",
  },
  {
    id: 4,
    icon: <StoreOutlined />,
    text: "Saloon",
    link: "#",
  },
  {
    id: 5,
    icon: <ShoppingCart />,
    text: "Shopping",
    link: "#",
  },
  {
    id: 6,
    icon: <LibraryBooksOutlined />,
    text: "Book Stores",
    link: "#",
  },
  {
    id: 7,
    icon: <DryCleaningOutlined />,
    text: "Laundry",
    link: "#",
  },
  {
    id: 8,
    icon: <ViewWeekRounded />,
    text: "More",
    link: "#",
  },
];

export default Home;
