import { Box, Typography } from "@mui/material";
import { CenteredBox } from "../styles/styled-components/styledBox";
import profileImg from "../assets/profileImg.svg";
import { FilledButton } from "../styles/styled-components/styledButtons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUsername } from "../store/user-slice";

const ProfileSidebar = ({ children }: any) => {
  const navigate = useNavigate();
  const username = useSelector(selectCurrentUsername);

  return (
    <Box
      sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}
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
          A fun and outdoor lover, Techie.
        </Typography>
        <CenteredBox sx={{ gap: 1 }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.4eem" },
              color: "#000",
              textAlign: "center",
              padding: "0 1em",
            }}
          >
            97 <span style={{ fontSize: "50%", display: "block" }}>Points</span>
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.4eem" },
              color: "#000",
              textAlign: "center",
              padding: "0 1em",
              borderLeft: "1px solid #000",
              borderRight: "1px solid #000",
            }}
          >
            797{" "}
            <span style={{ fontSize: "50%", display: "block" }}>Reviews</span>
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.4eem" },
              color: "#000",
              textAlign: "center",
              padding: "0 1em",
            }}
          >
            16 <span style={{ fontSize: "50%", display: "block" }}>Photos</span>
          </Typography>
        </CenteredBox>
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
            Business Page
          </FilledButton>
          <FilledButton
            sx={{
              width: "100%",
              fontSize: { xs: ".8rem", md: "1rem" },
              padding: ".5rem 0",
            }}
          >
            Plan My Day
          </FilledButton>
        </CenteredBox>
      </Box>
      <Box sx={{ width: "55%" }}>{children}</Box>
    </Box>
  );
};

export default ProfileSidebar;
