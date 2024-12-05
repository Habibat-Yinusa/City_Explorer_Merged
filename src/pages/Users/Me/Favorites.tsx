import { Box, Typography } from "@mui/material";
import ProfileSidebar from "../../../components/ProfileSidebar";
import promoBurger from "../../../assets/promo-burger.svg";
import { Favorite } from "@mui/icons-material";

const Favorites = () => {
  return (
    <ProfileSidebar>
      <Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "#000", fontWeight: 700, fontSize: "1.8rem" }}
          >
            Favorites
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#000", fontSize: "1rem", margin: "1em 0" }}
          >
            Your favorite places and businesses on Explore
          </Typography>

          <Box
            sx={{
              backgroundColor: "#fff",
              borderRadius: "30px",
              padding: "1.2em",
              width: "100%",
              margin: "1em 0",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
              }}
            >
              <Box sx={{ width: "7em" }}>
                <img src={promoBurger} style={{ width: "100%" }} />
              </Box>
              <Box sx={{ width: "100%" }}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: { xs: ".8rem", md: "1rem" } }}
                >
                  HairForYou
                </Typography>
                <Typography variant="body2" sx={{ fontSize: ".7rem" }}>
                  Address: 123 Street Abuja Garki Nigeria
                </Typography>
                <Typography variant="body2" sx={{ fontSize: ".7rem" }}>
                  Open from 8:00am - 10:30pm
                </Typography>
              </Box>
            </Box>
            <Favorite sx={{ color: "#758BFD" }} />
          </Box>
        </Box>
      </Box>
    </ProfileSidebar>
  );
};

export default Favorites;
