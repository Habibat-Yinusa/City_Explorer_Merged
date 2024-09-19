import { Box, Typography } from "@mui/material";
import { StyledTextField } from "../../../styles/styled-components/styledInputs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { CenteredBox } from "../../../styles/styled-components/styledBox";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import img1 from "../../../assets/img1.svg";
import hotelImg from "../../../assets/hotel-img.svg";

const Collections = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "1em",
      }}
    >
      <Box sx={{ width: "75%" }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "2em",
          }}
        >
          <StyledTextField
            placeholder="Search for restaurants, hotels, etc..."
            sx={{
              width: "63%",
              marginBottom: "1em",
              fontSize: "1rem",
              color: "#1E1E1E",
            }}
          />
          <Typography
            variant="h3"
            sx={{ fontSize: "1.5rem", color: "#1E1E1E" }}
          >
            Check out these collections of places to explore for the month of
            June
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              width: { xs: "90vw", md: "68vw", lg: "58vw" },
              borderRadius: "30px",
              overflow: "hidden",
            }}
          >
            {/* {isFetchingEvents && <LinearProgress />} */}
            <Splide
              options={{
                width: "100%",
                gap: "1em",
                arrows: false,
                pagination: false,
                type: "loop",
                padding: "10%",
                perPage: 3,
                AutoScroll: {
                  speed: 1,
                  pauseOnHover: true,
                },
              }}
              extensions={{ AutoScroll }}
            >
              {collectionsCard?.map((collection) => (
                <SplideSlide key={collection.id}>
                  <CenteredBox
                    sx={{
                      borderRadius: "20px",
                      padding: { xs: ".8em", md: ".6em .8em" },
                      flexDirection: "column",
                      backgroundColor: "#fff",
                      cursor: "pointer",
                      width: "12em",
                      gap: 5,
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
                        <img
                          src={collection.img}
                          alt=""
                          style={{ width: "100%" }}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: { xs: ".7em", md: ".9rem" } }}
                      >
                        {collection.text}
                      </Typography>
                    </CenteredBox>
                  </CenteredBox>
                </SplideSlide>
                // </Grid>
              ))}
            </Splide>
          </Box>
          <Box
            sx={{
              marginTop: "2em",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CenteredBox
              sx={{
                borderRadius: "20px",
                padding: { xs: ".8em", md: ".6em .8em" },
                flexDirection: "column",
                backgroundColor: "#fff",
                cursor: "pointer",
                width: "80%",
                gap: 5,
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
                  <img
                    src={hotelImg}
                    alt=""
                    style={{ width: "100%", borderRadius: "10px" }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: "1rem", md: "1.3rem" } }}
                >
                  The best hotels to go have a blast with your family and
                  friends in the city of Abuja.
                </Typography>
              </CenteredBox>
            </CenteredBox>
          </Box>
        </Box>
      </Box>

      {/* Ads space below */}
      <Box
        sx={{
          borderLeft: "1px solid #0000004D",
          width: "25%",
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "80%" }}>
          <Box
            sx={{
              border: "1px solid #758BFD",
              borderRadius: "10px",
              marginBottom: "1.5em",
              height: "15em",
            }}
          >
            <Typography variant="body2">Ads space</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const collectionsCard = [
  { id: 1, img: img1, text: "Top 20 burger spots in Abuja" },
  { id: 2, img: img1, text: "Top 15 happy places to eat in Abuja" },
  { id: 3, img: img1, text: "Top 20 burger spots in Abuja" },
  { id: 4, img: img1, text: "Top 20 burger spots in Abuja" },
  { id: 5, img: img1, text: "Top 15 happy places to eat in Abuja" },
];

export default Collections;
