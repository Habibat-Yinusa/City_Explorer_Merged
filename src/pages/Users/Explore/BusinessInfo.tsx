import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import { CenteredBox } from "../../../styles/styled-components/styledBox";
import {
  AccessTimeFilled,
  Add,
  Edit,
  ExpandMore,
  LocationOn,
  ManageAccounts,
  Public,
} from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
import meBanner from "../../../assets/meBanner.svg";
import { FilledButton } from "../../../styles/styled-components/styledButtons";
import { useParams } from "react-router-dom";
import { useGetBusinessQuery } from "./businessApiSlice";
import { useState } from "react";
import { selectCurrentUserRole } from "../../../store/user-slice";
import { useSelector } from "react-redux";

const BusinessInfo = () => {
  const userRole = useSelector(selectCurrentUserRole);
  const { businessId: urlBusinessId } = useParams();

  const targetBusinessId = urlBusinessId;

  const { data, isLoading } = useGetBusinessQuery(targetBusinessId as string, {
    skip: !targetBusinessId,
  });

  const [expanded, setExpanded] = useState(false);
  const [expandMap, setExpandMap] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const handleExpandMap = () => {
    setExpandMap(!expandMap);
  };

  if (isLoading) {
    return <LinearProgress />;
  }

  const formatUrl = (url: string) => {
    if (!url) return "#";
    return url.startsWith("http") ? url : `https://${url}`;
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          // alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
          }}
        >
          {/* <CenteredBox sx={{ width: "7em", marginTop: "2em" }}>
            <img src={data?.logo} alt="" style={{ width: "100%" }} />
          </CenteredBox> */}
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
            {data?.name}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: ".85rem", md: "1rem" },
              color: "#000",
              margin: ".3em 0",
            }}
          >
            {data?.location}
          </Typography>
          <CenteredBox
            sx={{
              // width: { xs: "100%", sm: "90%", md: "90%", lg: "80%" },
              width: "100%",
              marginTop: ".5em",
              justifyContent: "space-between",
            }}
          >
            <FilledButton
              sx={{
                width: "48%",
                fontSize: { xs: ".8rem", md: "1rem" },
                padding: ".5rem 1rem",
              }}
            >
              30k Reviews
            </FilledButton>
            <FilledButton
              sx={{
                width: "48%",
                fontSize: { xs: ".8rem", md: "1rem" },
                padding: ".5rem 1rem",
              }}
            >
              100 photos
            </FilledButton>
          </CenteredBox>
          <Box
            sx={{
              marginTop: "1em",
              marginBottom: { xs: "1em", md: "0" },
              width: "100%",
            }}
          >
            <Accordion
              expanded={expanded}
              onChange={handleChange}
              sx={{
                border: "none",
                boxShadow: "none",
                width: "100%",
                borderRadius: "15px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{ borderRadius: "15px" }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <AccessTimeFilled sx={{ color: "#3884FD" }} />
                  <Box>
                    <Typography>Open From</Typography>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ borderRadius: "15px", widtj: "100%" }}>
                {data?.openHours.map((hour) => (
                  <Typography key={hour.day}>
                    {hour.day} - {hour.time}
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
          </Box>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "55%" } }}>
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
                {data?.name}
              </Typography>
            </CenteredBox>
          </CenteredBox>
          <CenteredBox
            sx={{ justifyContent: "space-between", marginTop: "1em" }}
          >
            <Typography
              variant="body2"
              sx={{ color: "#000", fontWeight: 700, fontSize: "1.5rem" }}
            >
              Info
            </Typography>
            <Add
              sx={{
                border: "1px solid #3884FD",
                color: "#3884FD",
                borderRadius: "50px",
              }}
            />
          </CenteredBox>
          <Box
            sx={{
              display: { xs: "blocl", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "43%" } }}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                  width: "100%",
                  padding: ".7em",
                  margin: "1em 0",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    textDecoration: "none",
                    width: "100%",
                  }}
                  component="a"
                  href={formatUrl(data?.website || "#")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Public sx={{ color: "#758BFD" }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: "#000" }}>
                      Website
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#000" }}>
                      {data?.website}
                    </Typography>
                  </Box>
                </Box>
                {userRole === "business" &&
                  location.pathname.includes("/me") && (
                    <IconButton onClick={() => console.log("Edit")}>
                      <Edit sx={{ color: "#758BFD" }} />
                    </IconButton>
                  )}
                {/* <CallMade sx={{ color: "#758BFD" }} /> */}
              </Box>

              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "15px",
                  width: "100%",
                  padding: ".7em",
                  margin: "1em 0",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    textDecoration: "none",
                    width: "100%",
                  }}
                >
                  <Public sx={{ color: "#758BFD" }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: "#000" }}>
                      Phone
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#000" }}>
                      {data?.phone}
                    </Typography>
                  </Box>
                </Box>
                {userRole === "business" &&
                  location.pathname.includes("/me") && (
                    <IconButton onClick={() => console.log("Edit")}>
                      <Edit sx={{ color: "#758BFD" }} />
                    </IconButton>
                  )}
                {/* <CallMade sx={{ color: "#758BFD" }} /> */}
              </Box>

              <Box
                sx={{
                  backgroundColor: "#fff",
                  width: "100%",
                  borderRadius: "15px",
                  padding: ".7em",
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  margin: "1em 0",
                }}
              >
                <Public sx={{ color: "#758BFD" }} />
                <Box>
                  <Typography variant="body2" sx={{ color: "#000" }}>
                    Payment
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#000" }}>
                    Cash, Card or Bank Transfer
                  </Typography>
                </Box>
                <Box></Box>
              </Box>
            </Box>
            <Box sx={{ width: { xs: "100%", md: "50%" }, margin: "1em 0" }}>
              <Accordion
                expanded={expandMap}
                onChange={handleExpandMap}
                sx={{
                  border: "none",
                  boxShadow: "none",
                  width: "100%",
                  borderRadius: "15px",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{ borderRadius: "15px" }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LocationOn sx={{ color: "#3884FD" }} />
                    <Box>
                      <Typography>Address</Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ borderRadius: "15px", widtj: "100%" }}>
                  <Box>Map</Box>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BusinessInfo;
