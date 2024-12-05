import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { CenteredBox } from "../../../styles/styled-components/styledBox";
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
import meBanner from "../../../assets/meBanner.svg";
import { FilledButton } from "../../../styles/styled-components/styledButtons";
import { useSelector } from "react-redux";
import { selectCurrentUsername } from "../../../store/user-slice";
import ProfileSidebar from "../../../components/ProfileSidebar";
import PointsModal from "./modals/PointsModal";
import BillingModal from "./modals/BillingModal";

const Me = () => {
  const navigate = useNavigate();
  const username = useSelector(selectCurrentUsername);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleModalOpen = (content: string) => {
    setModalContent(content);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setModalContent("");
  };

  return (
    <ProfileSidebar>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <CenteredBox
              sx={{
                justifyContent: "start",
                backgroundImage: `url(${meBanner})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                padding: "1.5em 2em",
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
                  {username}
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
                        backgroundColor: "#3884FD",
                        color: "#fff",
                      },
                    }}
                    onClick={() => {
                      if (link.modal) {
                        handleModalOpen(link.modalContent);
                      } else if (link.link) {
                        navigate(link.link);
                      }
                    }}
                  >
                    <CenteredBox
                      sx={{
                        backgroundColor: "#ececec",
                        padding: ".5em",
                        borderRadius: "50px",
                        color: "#3884FD",
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

      {/* Render dynamic modals */}
      {modalContent === "My Points" && username && (
        <PointsModal
          open={openModal}
          onClose={handleModalClose}
          points={"92"}
          username={username}
        />
      )}
      {modalContent === "Payments and Billing" && (
        <BillingModal open={openModal} onClose={handleModalClose} />
      )}
    </ProfileSidebar>
  );
};

// Links configuration
const meLinks = [
  {
    id: 1,
    icon: <Favorite />,
    text: "Favorites",
    link: "favorites",
  },
  {
    id: 2,
    icon: <Star />,
    text: "My Points",
    modal: true,
    modalContent: "My Points",
  },
  {
    id: 3,
    icon: <ReviewsOutlined />,
    text: "Reviews",
    link: "reviews",
  },
  {
    id: 4,
    icon: <PhotoSizeSelectActual />,
    text: "Photos",
    link: "photos",
  },
  {
    id: 5,
    icon: <Paid />,
    text: "Payments and Billing",
    modal: true,
    modalContent: "Payments and Billing",
  },
  {
    id: 7,
    icon: <Settings />,
    text: "Settings",
    link: "settings",
  },
];

export default Me;
