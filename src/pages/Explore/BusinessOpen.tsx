import { Box, Typography } from "@mui/material";
import { CenteredBox } from "../../styles/styled-components/styledBox";
import { Add, ManageAccounts } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
import meBanner from "../../assets/meBanner.svg";
import profileImg from "../../assets/profileImg.svg";
import { FilledButton } from "../../styles/styled-components/styledButtons";
import { useSelector } from "react-redux";
import { selectCurrentUsername } from "../../store/user-slice";

const BusinessOpen = () => {
  // const navigate = useNavigate();
  const username = useSelector(selectCurrentUsername);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          // alignItems: "center",
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
            {username}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: ".85rem", md: "1rem" },
              color: "#000",
              margin: ".3em 0",
            }}
          >
            Address/Location
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
              See reviews
            </FilledButton>
            <FilledButton
              sx={{
                width: "48%",
                fontSize: { xs: ".8rem", md: "1rem" },
                padding: ".5rem 1rem",
              }}
            >
              Add photos
            </FilledButton>
          </CenteredBox>
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
                Business name
              </Typography>
            </CenteredBox>
          </CenteredBox>
          <CenteredBox sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="body2"
              sx={{ color: "#000", fontWeight: 700, fontSize: "1.5rem" }}
            >
              Services
            </Typography>
            <Add
              sx={{
                border: "1px solid #758BFD",
                color: "#758BFD",
                borderRadius: "50px",
              }}
            />
          </CenteredBox>
          <CenteredBox>
            <Typography
              variant="body2"
              sx={{ color: "#ABABAB", fontWeight: 700, fontSize: "1rem" }}
            >
              No product added
            </Typography>
          </CenteredBox>
        </Box>
      </Box>
    </Box>
  );
};

export default BusinessOpen;
