/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from "@mui/material";
import burgerBanner from "../../assets/burgerbanner.svg";
import { CenteredBox } from "../../styles/styled-components/styledBox";

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
    </Box>
  );
};

export default Home;
