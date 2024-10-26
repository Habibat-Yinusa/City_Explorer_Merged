import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { CenteredBox } from "../../../styles/styled-components/styledBox";
import {
  AccessTimeFilled,
  ExpandMore,
  LocationOn,
  ManageAccounts,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import meBanner from "../../../assets/meBanner.svg";
import profileImg from "../../../assets/profileImg.svg";
import { FilledButton } from "../../../styles/styled-components/styledButtons";
import { useSelector } from "react-redux";
import {
  selectCurrentBusinessLocation,
  selectCurrentBusinessName,
} from "../../../store/user-slice";
import img1 from "../../../assets/img1.svg";
import React from "react";

const Services = () => {
  const navigate = useNavigate();
  const businessName = useSelector(selectCurrentBusinessName);
  const businessLocation = useSelector(selectCurrentBusinessLocation);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          <CenteredBox sx={{ width: "7em", marginTop: "2em" }}>
            <img src={profileImg} alt="" style={{ width: "100%" }} />
          </CenteredBox>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.7rem", md: "2rem" },
              color: "#000",
              marginTop: ".4em",
              textTransform: "capitalize",
            }}
          >
            {businessName}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: ".85rem", md: "1rem" },
              color: "#000",
              margin: ".3em 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LocationOn sx={{ color: "#3884FD" }} /> {businessLocation}
          </Typography>

          <CenteredBox
            sx={{
              // width: { xs: "100%", sm: "90%", md: "90%", lg: "80%" },
              width: "100%",
              marginTop: ".5em",
              justifyContent: "space-between",
              flexDirection: { xs: "column", lg: "row" },
              gap: 1,
            }}
          >
            <FilledButton
              sx={{
                width: "100%",
                fontSize: { xs: ".8rem", md: "1rem" },
                padding: ".5rem 0",
              }}
              onClick={() => navigate(`/explore/business`)}
            >
              33.1k Reviews
            </FilledButton>
            <FilledButton
              sx={{
                width: "100%",
                fontSize: { xs: ".8rem", md: "1rem" },
                padding: ".5rem 0",
              }}
            >
              851 Photos
            </FilledButton>
          </CenteredBox>
          <Box sx={{ marginTop: "1em" }}>
            <Accordion
              expanded={expanded}
              onChange={handleChange}
              sx={{ border: "none", boxShadow: "none" }}
            >
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <AccessTimeFilled sx={{ color: "#3884FD" }} />
                  <Typography>Open From</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
        <Box sx={{ width: "55%" }}>
          <CenteredBox
            sx={{
              justifyContent: "start",
              backgroundImage: `url(${meBanner})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              padding: "1.5em 2em",
              // width: "60%",
              borderRadius: "10px",
            }}
          >
            <CenteredBox sx={{ flexDirection: "column", width: "100%" }}>
              <CenteredBox
                sx={{
                  alignSelf: "end",
                  padding: ".7em",
                  backgroundColor: "#ececec80",
                  borderRadius: "50px",
                  marginTop: "1em",
                  cursor: "pointer",
                }}
              >
                <ManageAccounts sx={{ color: "#fff" }} />
              </CenteredBox>
              <Typography
                variant="h3"
                sx={{ color: "#fff", fontWeight: 700, padding: "1em 0" }}
              >
                {businessName}
              </Typography>
            </CenteredBox>
          </CenteredBox>
          <Box sx={{ marginTop: "1em" }}>
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, fontWeight: 700 }}
            >
              Services
            </Typography>
            <Box sx={{ marginTop: "1rem" }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <CenteredBox
                    sx={{
                      borderRadius: "20px",
                      padding: { xs: ".8em", md: ".6em .8em" },
                      flexDirection: "column",
                      backgroundColor: "#fff",
                      cursor: "pointer",
                      width: "8em",
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
                        <img src={img1} alt="" style={{ width: "100%" }} />
                      </Box>
                      <Box sx={{ display: "flex", gap: 1 }}>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: { xs: ".5em", md: ".7rem" } }}
                        >
                          Beef burger with chips
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ fontSize: { xs: ".5em", md: ".7rem" } }}
                        >
                          $13
                        </Typography>
                      </Box>
                    </CenteredBox>
                  </CenteredBox>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
