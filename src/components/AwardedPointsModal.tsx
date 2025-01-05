import { Close } from "@mui/icons-material";
import { Box, Typography, Modal, IconButton } from "@mui/material";
import ReviewIcon from "../assets/review-icon.svg";

type AwardedPointsModalProps = {
  open: boolean;
  onClose: () => void;
  username: string;
};

const AwardedPointsModal = ({
  open,
  onClose,
  username,
}: AwardedPointsModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: "10px",
          width: { xs: "90%", md: "50%" },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton
            onClick={onClose}
            sx={{
              fontSize: "1rem",
              color: "#888",
            }}
          >
            <Close />
          </IconButton>
        </Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          Review Successful
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <img src={ReviewIcon} style={{ width: "25em", margin: "1em 0" }} />

          <Typography
            sx={{
              textAlign: "center",
              textTransform: "capitalize",
              fontWeight: 700,
            }}
          >
            Nice one {username}!
          </Typography>
          <Typography sx={{ textAlign: "center" }}>
            You've earned 1 Explore point for your review
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default AwardedPointsModal;
