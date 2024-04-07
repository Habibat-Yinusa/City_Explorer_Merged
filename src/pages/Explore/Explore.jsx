import { Box, Typography } from "@mui/material";
import { CenteredBox } from "../../styles/styled-components/styledBox";
import img2 from "../../assets/img2.svg";
import { FilledButton } from "../../styles/styled-components/styledButtons";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Explore = () => {
  return (
    <Box>
      <CenteredBox>
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
            style={{ width: "100%", margin: "0 auto" }}
          >
            {interests.map((item) => (
              <SplideSlide key={item.id}>
                <CenteredBox
                  sx={{
                    borderRadius: "20px",
                    padding: ".8em 1em",
                    // width: "30%",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                    cursor: "pointer",
                    alignItems: "start",
                    maxWidth: "20em",
                  }}
                >
                  <Box sx={{ width: "18em", borderRadius: "30px" }}>
                    <img src={item.image} alt="" style={{ width: "100%" }} />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      textAlign: "left",
                      margin: ".1em 0",
                    }}
                  >
                    {item.header}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: ".9rem" }}>
                    {item.text}
                  </Typography>
                  <FilledButton sx={{ width: "100%", marginTop: ".7em" }}>
                    Check it out
                  </FilledButton>
                </CenteredBox>
              </SplideSlide>
            ))}
          </Splide>
        </CenteredBox>
      </CenteredBox>
    </Box>
  );
};

const interests = [
  {
    id: 1,
    header: "Rahza Technology Ltd",
    text: `The biggest hackathon of the year is happening next month in Abuja. Get ready for vibes, 
    lots of tech stuff and interesting solutions.`,
    image: img2,
  },
  {
    id: 2,
    header: "Capital Block Party",
    text: `The biggest pool party of the year is here. Don't miss it for anything. People from all
     over the country turn up to the Capital Block Party. Get your tickets now.`,
    image: img2,
  },
  {
    id: 3,
    header: "Capital Block Party",
    text: `The biggest pool party of the year is here. Don't miss it for anything. People from all
     over the country turn up to the Capital Block Party. Get your tickets now.`,
    image: img2,
  },
  {
    id: 4,
    header: "Rahza Technology Ltd",
    text: `The biggest hackathon of the year is happening next month in Abuja. Get ready for vibes, 
    lots of tech stuff and interesting solutions.`,
    image: img2,
  },
  {
    id: 5,
    header: "Capital Block Party",
    text: `The biggest pool party of the year is here. Don't miss it for anything. People from all
     over the country turn up to the Capital Block Party. Get your tickets now.`,
    image: img2,
  },
  {
    id: 6,
    header: "Rahza Technology Ltd",
    text: `The biggest hackathon of the year is happening next month in Abuja. Get ready for vibes, 
    lots of tech stuff and interesting solutions.`,
    image: img2,
  },
  {
    id: 7,
    header: "Capital Block Party",
    text: `The biggest pool party of the year is here. Don't miss it for anything. People from all
     over the country turn up to the Capital Block Party. Get your tickets now.`,
    image: img2,
  },
  {
    id: 8,
    header: "Rahza Technology Ltd",
    text: `The biggest hackathon of the year is happening next month in Abuja. Get ready for vibes, 
    lots of tech stuff and interesting solutions.`,
    image: img2,
  },
  {
    id: 9,
    header: "Capital Block Party",
    text: `The biggest pool party of the year is here. Don't miss it for anything. People from all
     over the country turn up to the Capital Block Party. Get your tickets now.`,
    image: img2,
  },
  {
    id: 10,
    header: "Rahza Technology Ltd",
    text: `The biggest hackathon of the year is happening next month in Abuja. Get ready for vibes, 
    lots of tech stuff and interesting solutions.`,
    image: img2,
  },
];

export default Explore;
