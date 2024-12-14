import { useState } from "react";
import { Box, Typography, Grid, LinearProgress } from "@mui/material";
import { StyledTextField } from "../../../styles/styled-components/styledInputs";
import {
  selectCurrentBusinessName,
  selectCurrentUsername,
  selectCurrentUserRole,
} from "../../../store/user-slice";
import { useSelector } from "react-redux";
import all from "../../../assets/all.svg";
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
import { useGetBusinessesQuery } from "./businessApiSlice";
import { useNavigate } from "react-router-dom";

const Explore = () => {
  const username = useSelector(selectCurrentUsername);
  const businessName = useSelector(selectCurrentBusinessName);
  const role = useSelector(selectCurrentUserRole);
  const navigate = useNavigate();

  const { data: businesses, isLoading: isFetchingBusinesses } =
    useGetBusinessesQuery();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredBusinesses = businesses?.filter(
    (business) =>
      !selectedCategory ||
      selectedCategory === "all" ||
      business.category === selectedCategory
  );

  const handleCategoryClick = (category: string) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
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
            {role !== "business" ? username : businessName}
          </span>
          , explore some places, businesses, and lots more around the city
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
                  border:
                    selectedCategory === item.category
                      ? "2px solid #3884FD"
                      : "1px solid #ccc",
                  display: "flex",
                  alignItems: "center",
                  padding: ".2em 1em",
                  borderRadius: "20px",
                  width: "15em",
                  gap: 1,
                  cursor: "pointer",
                  backgroundColor:
                    selectedCategory === item.category ? "#E6F1FF" : "white",
                }}
                onClick={() => handleCategoryClick(item.category)}
              >
                <Box sx={{ width: "3em" }}>
                  <img
                    src={item.icon}
                    style={{ width: "100%", minWidth: "3em" }}
                    alt={item.name}
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
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.7rem", md: "2rem" },
            width: "100%",
            marginBottom: ".6em",
            margin: "1em 0",
          }}
        >
          Businesses
        </Typography>
        {isFetchingBusinesses && <LinearProgress />}
        <Grid container spacing={3}>
          {!isFetchingBusinesses &&
            filteredBusinesses?.map((business) => (
              <Grid item key={business._id} xs={12} sm={6} md={4}>
                <Box
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "1em",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    navigate(`${business._id}`, {
                      state: { businessData: business },
                    })
                  }
                >
                  <img
                    src={business.logo}
                    alt={business.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      margin: "1em 0",
                      textTransform: "capitalize",
                    }}
                  >
                    {business.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {business.category}
                  </Typography>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

const categoryCard = [
  { id: 0, name: "All", category: "all", icon: all },
  { id: 1, name: "Dinning", category: "dinning", icon: dinning },
  {
    id: 2,
    name: "Entertainment",
    category: "entertainment",
    icon: entertainment,
  },
  {
    id: 3,
    name: "Educational Services",
    category: "education",
    icon: educational,
  },
  { id: 4, name: "Lifestyle", category: "lifestyle", icon: lifestyle },
  { id: 5, name: "Wellness", category: "wellness", icon: wellness },
  { id: 6, name: "Art & Culture", category: "art", icon: art },
  { id: 7, name: "Shopping & Retail", category: "shopping", icon: shopping },
  { id: 8, name: "Social Networking", category: "social", icon: social },
  { id: 9, name: "Travels & Tourism", category: "travels", icon: travels },
  { id: 10, name: "Outdoor", category: "outdoor", icon: outdoor },
];

export default Explore;
