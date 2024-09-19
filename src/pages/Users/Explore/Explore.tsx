import { Box, Typography, Grid } from "@mui/material";
// import { CenteredBox } from "../../../styles/styled-components/styledBox";
// import img2 from "../../../assets/img2.svg";
// import { FilledButton } from "../../../styles/styled-components/styledButtons";
// import React from "react";
import { StyledTextField } from "../../../styles/styled-components/styledInputs";
import {
  selectCurrentBusinessName,
  selectCurrentUsername,
  selectCurrentUserRole,
} from "../../../store/user-slice";
import { useSelector } from "react-redux";
import dinning from "../../../assets/dinning.svg";
import entertainment from "../../../assets/entertainment.svg";
import educational from "../../../assets/educational.svg";
import lifestyle from "../../../assets/lifestyle.svg";
import wellness from "../../../assets/wellness.svg";
import art from "../../../assets/art.svg";
import shopping from "../../../assets/shopping.svg";
import social from "../../../assets/social.svg";
import travels from "../../../assets/travels.svg";
import outdoor from "../../../assets/outdoor.svg";

const Explore = () => {
  const username = useSelector(selectCurrentUsername);
  const businessName = useSelector(selectCurrentBusinessName);
  const role = useSelector(selectCurrentUserRole);
  // const [searchQuery, setSearchQuery] = React.useState("");

  // const handleSearchChange = (event: {
  //   target: { value: React.SetStateAction<string> };
  // }) => {
  //   setSearchQuery(event.target.value);
  // };

  // const getSearchedItems = () => {
  //   const filteredItems = interests.filter((item) =>
  //     item.header.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  //   const rearrangedItems = filteredItems.sort(
  //     (a, b) =>
  //       a.header.toLowerCase().indexOf(searchQuery.toLowerCase()) -
  //       b.header.toLowerCase().indexOf(searchQuery.toLowerCase())
  //   );
  //   return rearrangedItems;
  // };

  return (
    <Box>
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
        {/* <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={interests.map((item) => item.header)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search..."
              onChange={handleSearchChange}
              InputProps={{
                type: "search",
              }}
            />
          )}
          sx={{ width: "60%", marginBottom: "1em" }}
        /> */}
        <StyledTextField
          placeholder="Search for restaurants, hotels, etc..."
          sx={{
            width: "63%",
            marginBottom: "1em",
            fontSize: "1rem",
            color: "#1E1E1E",
          }}
        />
        <Typography variant="h3" sx={{ fontSize: "1.5rem", color: "#1E1E1E" }}>
          Hey{" "}
          <span style={{ textTransform: "capitalize" }}>
            {role != "business" ? username : businessName}
          </span>
          , explore some places, businesses and lots more around the city
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.7rem", md: "2rem" },
            width: "100%",
            marginBottom: ".6em",
          }}
        >
          Categories
        </Typography>
        <Grid container spacing={3}>
          {categoryCard.map((item) => (
            <Grid item key={item.id}>
              <Box
                sx={{
                  border: "1px solid #758BFD",
                  display: "flex",
                  // justifyContent: "space-between",
                  alignItems: "center",
                  padding: ".2em 1em",
                  borderRadius: "20px",
                  width: "15em",
                  gap: 1,
                }}
              >
                <Box sx={{ width: "3em" }}>
                  <img
                    src={item.icon}
                    style={{ width: "100%", minWidth: "3em" }}
                  />
                </Box>
                <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                  {item.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* <CenteredBox>
        <CenteredBox sx={{ justifyContent: "space-between" }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-start" },
              alignItems: "center",
            }}
          >
            {getSearchedItems().map((item) => (
              <Grid item xs={10} sm={6} md={6} lg={4} key={item.id}>
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
                  <CenteredBox
                    sx={{
                      width: "100%",
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{ width: "100%", borderRadius: "30px" }}>
                      <img src={item.image} alt="" style={{ width: "100%" }} />
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: ".9em", md: "1.1rem" },
                        fontWeight: 700,
                        textAlign: "left",
                        margin: ".1em 0",
                      }}
                    >
                      {item.header}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontSize: { xs: ".7em", md: ".9rem" } }}
                    >
                      {item.text}
                    </Typography>
                    <FilledButton
                      sx={{
                        width: "100%",
                        marginTop: ".7em",
                        fontSize: { xs: ".9em", md: "1.2rem" },
                      }}
                    >
                      Check it out
                    </FilledButton>
                  </CenteredBox>
                </CenteredBox>
              </Grid>
            ))}
          </Grid>
        </CenteredBox>
      </CenteredBox> */}
    </Box>
  );
};

const categoryCard = [
  { id: 1, name: "Dinning", icon: dinning, link: "#" },
  { id: 2, name: "Entertainment", icon: entertainment, link: "#" },
  { id: 3, name: "Educational Services", icon: educational, link: "#" },
  { id: 4, name: "Lifestyle", icon: lifestyle, link: "#" },
  { id: 5, name: "Wellness", icon: wellness, link: "#" },
  { id: 6, name: "Art & Culture", icon: art, link: "#" },
  { id: 7, name: "Shopping & Retail", icon: shopping, link: "#" },
  { id: 8, name: "Social Networking", icon: social, link: "#" },
  { id: 9, name: "Travels & Tourism", icon: travels, link: "#" },
  { id: 10, name: "Outdoor", icon: outdoor, link: "#" },
];

// const interests = [
//   {
//     id: 1,
//     header: "Rahza Technology Ltd",
//     text: `The biggest hackathon of the year is happening next month in Abuja. Get ready for vibes,
//     lots of tech stuff and interesting solutions.`,
//     image: img2,
//   },
//   {
//     id: 2,
//     header: "Capital Block Party",
//     text: `The biggest pool party of the year is here. Don't miss it for anything. People from all
//      over the country turn up to the Capital Block Party. Get your tickets now.`,
//     image: img2,
//   },
//   {
//     id: 3,
//     header: "Capital Block Party",
//     text: `The biggest pool party of the year is here. Don't miss it for anything. People from all
//      over the country turn up to the Capital Block Party. Get your tickets now.`,
//     image: img2,
//   },
//   {
//     id: 4,
//     header: "Rahza Technology Ltd",
//     text: `The biggest hackathon of the year is happening next month in Abuja. Get ready for vibes,
//     lots of tech stuff and interesting solutions.`,
//     image: img2,
//   },
//   {
//     id: 5,
//     header: "Capital Block Party",
//     text: `The biggest pool party of the year is here. Don't miss it for anything. People from all
//      over the country turn up to the Capital Block Party. Get your tickets now.`,
//     image: img2,
//   },
//   {
//     id: 6,
//     header: "Rahza Technology Ltd",
//     text: `The biggest hackathon of the year is happening next month in Abuja. Get ready for vibes,
//     lots of tech stuff and interesting solutions.`,
//     image: img2,
//   },
//   {
//     id: 7,
//     header: "Capital Block Party",
//     text: `The biggest pool party of the year is here. Don't miss it for anything. People from all
//      over the country turn up to the Capital Block Party. Get your tickets now.`,
//     image: img2,
//   },
//   {
//     id: 8,
//     header: "Rahza Technology Ltd",
//     text: `The biggest hackathon of the year is happening next month in Abuja. Get ready for vibes,
//     lots of tech stuff and interesting solutions.`,
//     image: img2,
//   },
//   {
//     id: 9,
//     header: "Capital Block Party",
//     text: `The biggest pool party of the year is here. Don't miss it for anything. People from all
//      over the country turn up to the Capital Block Party. Get your tickets now.`,
//     image: img2,
//   },
//   {
//     id: 10,
//     header: "Rahza Technology Ltd",
//     text: `The biggest hackathon of the year is happening next month in Abuja. Get ready for vibes,
//     lots of tech stuff and interesting solutions.`,
//     image: img2,
//   },
// ];

export default Explore;
