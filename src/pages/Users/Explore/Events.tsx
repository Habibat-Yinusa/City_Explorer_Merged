import React from "react";
import { Autocomplete, Box, Grid, Typography } from "@mui/material";
import img2 from "../../../assets/img2.svg";
import { FilledButton } from "../../../styles/styled-components/styledButtons";
import { CenteredBox } from "../../../styles/styled-components/styledBox";
import { StyledTextField } from "../../../styles/styled-components/styledInputs";

const Events = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchQuery(event.target.value);
  };

  const getSearchedItems = () => {
    const filteredItems = interests.filter((item) =>
      item.header.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const rearrangedItems = filteredItems.sort(
      (a, b) =>
        a.header.toLowerCase().indexOf(searchQuery.toLowerCase()) -
        b.header.toLowerCase().indexOf(searchQuery.toLowerCase())
    );
    return rearrangedItems;
  };

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
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={interests.map((item) => item.header)}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              label="Search..."
              onChange={handleSearchChange}
              InputProps={{
                type: "search",
              }}
            />
          )}
          sx={{ width: "60%", marginBottom: "1em" }}
        />
      </Box>
      <Box>
        <CenteredBox>
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
                        <img
                          src={item.image}
                          alt=""
                          style={{ width: "100%" }}
                        />
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
        </CenteredBox>
      </Box>
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

export default Events;
