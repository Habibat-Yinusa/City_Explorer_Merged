import { Box, Typography } from "@mui/material";
import { CenteredBox } from "../../styles/styled-components/styledBox";

const Me = () => {
  return (
    <Box>
      <CenteredBox sx={{ justifyContent: "start" }}>
        <Typography variant="h2" sx={{ fontWeight: 600 }}>
          Coming Soon....
        </Typography>
      </CenteredBox>
    </Box>
  );
};

export default Me;
