import { Box, Typography } from "@mui/material";
import { CenteredBox } from "../../../styles/styled-components/styledBox";
import { useState } from "react";
import { BgButton } from "../../../styles/styled-components/styledButtons";
import RegistrationModal from "../../Auth/modals/RegistrationModal";

const NewBusiness = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <CenteredBox
        sx={{
          height: "100vh",
        }}
      >
        <CenteredBox
          sx={{
            flexDirection: "column",
            padding: "0em 5em",
            minHeight: "100vh",
          }}
        >
          <Box
            sx={{
              width: "35%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
              backgroundColor: "#fff",
              padding: "3em",
              borderRadius: "15px",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, fontSize: "1.5rem" }}
            >
              Welcome to your business profile
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                fontSize: "1.2rem",
                textAlign: "center",
                marginTop: "1em",
              }}
            >
              Let's get your business profile set up. We'll guide you through
              adding essent ial information step-by-step. Click 'Next' to get
              started.
            </Typography>
            <BgButton
              sx={{ width: "70%", marginTop: "1em" }}
              onClick={handleOpen}
            >
              Next
            </BgButton>
            <RegistrationModal open={open} handleClose={handleClose} />
          </Box>
        </CenteredBox>
      </CenteredBox>
    </Box>
  );
};

export default NewBusiness;
