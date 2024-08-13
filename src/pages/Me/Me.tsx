import { Box, Typography } from "@mui/material";
import { CenteredBox } from "../../styles/styled-components/styledBox";
import {
  Favorite,
  ManageAccounts,
  Paid,
  PhotoSizeSelectActual,
  ReviewsOutlined,
  Settings,
  Star,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import meBanner from "../../assets/meBanner.svg";
import profileImg from "../../assets/profileImg.svg";
import { FilledButton } from "../../styles/styled-components/styledButtons";
import { useSelector } from "react-redux";
import { selectCurrentUsername } from "../../store/user-slice";

const Me = () => {
  const navigate = useNavigate();
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
              97{" "}
              <span style={{ fontSize: "50%", display: "block" }}>Points</span>
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
              16{" "}
              <span style={{ fontSize: "50%", display: "block" }}>Photos</span>
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
              My Business Page
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
          <CenteredBox sx={{ flexDirection: "column" }}>
            {meLinks.map((link) => (
              <CenteredBox
                sx={{
                  width: { xs: "100%", sm: "90%", md: "100%", lg: "100%" },
                }}
                key={link.id}
              >
                <FilledButton
                  sx={{
                    width: "100%",
                    margin: ".5em 0",
                    display: "flex",
                    justifyContent: "start",
                    gap: 1,
                    padding: ".2em .6em",
                    backgroundColor: "#fff",
                    color: "#1E1E1E",
                    fontSize: { xs: ".7rem", md: "1rem" },
                    "&:hover": {
                      backgroundColor: "#758BFD",
                      color: "#fff",
                    },
                  }}
                  onClick={() => navigate(link.link)}
                >
                  <CenteredBox
                    sx={{
                      backgroundColor: "#ececec",
                      padding: ".5em",
                      borderRadius: "50px",
                      color: "#758BFD",
                    }}
                  >
                    {link.icon}
                  </CenteredBox>
                  {link.text}
                </FilledButton>
              </CenteredBox>
            ))}
          </CenteredBox>
        </Box>
      </Box>
    </Box>
  );
};

const meLinks = [
  {
    id: 1,
    icon: <Favorite />,
    text: "Favorites",
    link: "/me/favorites",
  },
  {
    id: 2,
    icon: <Star />,
    text: "My Points",
    link: "#",
  },
  {
    id: 3,
    icon: <ReviewsOutlined />,
    text: "Reviews",
    link: "#",
  },
  {
    id: 4,
    icon: <PhotoSizeSelectActual />,
    text: "Photos",
    link: "#",
  },
  {
    id: 5,
    icon: <Paid />,
    text: "Payments and Billing",
    link: "#",
  },
  {
    id: 6,
    icon: <Settings />,
    text: "Business Page Settings",
    link: "#",
  },
  {
    id: 7,
    icon: <Settings />,
    text: "Settings",
    link: "#",
  },
];

export default Me;
