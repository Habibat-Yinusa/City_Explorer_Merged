import { Box, Grid, Typography } from "@mui/material";
import ProfileSidebar from "../../../components/ProfileSidebar";
import promoBurger from "../../../assets/promo-burger.svg";

const Photos = () => {
  return (
    <ProfileSidebar>
      <Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "#000", fontWeight: 700, fontSize: "1.8rem" }}
          >
            Photos
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#000", fontSize: "1rem", margin: "1em 0" }}
          >
            Find all the photos you've posted on Explore here. Your own personal
            collection of memories.
          </Typography>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Box>
                  <img src={promoBurger} style={{ width: "100%" }} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box>
                  <img src={promoBurger} style={{ width: "100%" }} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box>
                  <img src={promoBurger} style={{ width: "100%" }} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box>
                  <img src={promoBurger} style={{ width: "100%" }} />
                </Box>
              </Grid>
              <Grid item xs={3}>
                <Box>
                  <img src={promoBurger} style={{ width: "100%" }} />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </ProfileSidebar>
  );
};

export default Photos;
