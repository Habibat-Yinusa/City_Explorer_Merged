/* eslint-disable react/no-unescaped-entities */
import { Box, Typography, Grid, LinearProgress } from "@mui/material";
import { CenteredBox } from "../../../styles/styled-components/styledBox";
import burgerBanner from "../../../assets/burgerbanner.svg";
// import img1 from "../../../assets/img1.svg";
import img2 from "../../../assets/img2.svg";
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
import { FilledButton } from "../../../styles/styled-components/styledButtons";
import {
  useGetAllEventsQuery,
  useGetAllPromosQuery,
} from "../Explore/businessApiSlice";

const Home = () => {
  const navigate = useNavigate();
  const { data: events, isLoading: isFetchingEvents } = useGetAllEventsQuery();
  const { data: promos, isLoading: isFetchingPromos } = useGetAllPromosQuery();

  return (
    <Box sx={{ backgroundColor: "#ececec" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "90vw", md: "68vw", lg: "75vw" },
            borderRadius: "30px",
            overflow: "hidden",
          }}
        >
          {isFetchingPromos && <LinearProgress />}
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
            {promos?.map((promo) => (
              <SplideSlide key={promo._id}>
                <CenteredBox
                  sx={{
                    backgroundColor: "#3884FD",
                    borderRadius: "30px",
                    maxWidth: { xs: "700px", md: "1000px" },
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    navigate(`/home/promos/${promo._id}`, { state: { promo } })
                  }
                >
                  <CenteredBox
                    sx={{
                      width: "80%",
                      justifyContent: "space-between",
                      padding: { xs: "1em 0", md: "1em 0" },
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        fontSize: {
                          xs: "1rem",
                          sm: "1.2rem",
                          md: "1.4rem",
                          lg: "1.8rem",
                        },
                        color: "#fff",
                        lineHeight: "1.5em",
                        width: "60%",
                      }}
                    >
                      {promo.description}
                    </Typography>
                    <Box
                      sx={{
                        width: {
                          xs: "10em",
                          sm: "12em",
                          md: "15em",
                          lg: "20em",
                        },
                      }}
                    >
                      <img
                        src={burgerBanner}
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </Box>
                  </CenteredBox>
                </CenteredBox>
              </SplideSlide>
            ))}
          </Splide>
        </Box>
      </Box>

      <CenteredBox sx={{ marginTop: "2em" }}>
        <Grid
          container
          sx={{
            margin: { xs: "1.8em 0", md: "2em 0" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
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
                  maxWidth: { xs: "4em", md: "6em" },
                  width: { xs: "4em", md: "6em" },
                  cursor: "pointer",
                  margin: { xs: ".3em .7em", lg: ".4em 1em" },
                }}
                onClick={() => navigate(item.link)}
              >
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: { xs: ".7em", md: "1em" },
                    borderRadius: "15px",
                    // fontSize: "2rem",
                    color: "#3884FD",
                  }}
                >
                  {/* <BuildOutlined sx={{ fontSize: "2rem", color: "#3884FD" }} /> */}
                  {item.icon}
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: ".6em", md: "1rem" },
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isFetchingEvents && <LinearProgress />}
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
            {events?.map((event) => (
              <SplideSlide key={event._id}>
                <CenteredBox
                  sx={{
                    borderRadius: "20px",
                    padding: { xs: "1em", md: ".8em 1em" },
                    flexDirection: "column",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    width: "100%",
                    gap: 3,
                    minHeight: "3em",
                    maxHeight: "18em",
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
                      <img src={img2} alt="" style={{ width: "100%" }} />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: ".8rem", md: "1rem" },
                        display: "-webkit-box",
                        WebkitLineClamp: { xs: 3, md: 3 },
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                      }}
                    >
                      {event.description}
                    </Typography>
                    <FilledButton
                      sx={{
                        width: "100%",
                        fontSize: { xs: ".6rem", md: ".9rem" },
                      }}
                    >
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
