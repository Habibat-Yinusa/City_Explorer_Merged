import { Close } from "@mui/icons-material";
import { Box, Typography, Button, Modal, IconButton } from "@mui/material";

type PointsModalProps = {
  open: boolean;
  onClose: () => void;
  points: string;
  username: string;
};

const PointsModal = ({ open, onClose, points, username }: PointsModalProps) => {
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
          maxWidth: "400px",
          width: "90%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            My Points
          </Typography>
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
        <Typography variant="body2" sx={{ marginBottom: "1em", color: "#777" }}>
          Track your explore points here
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <Box
            sx={{
              width: "100px",
              height: "100px",
              backgroundColor: "#F5F5F5",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#3884FD",
            }}
          >
            {points}
          </Box>
          <Typography sx={{ textAlign: "center" }}>
            Hey {username}, you have {points} explore points.
          </Typography>
          <Typography
            sx={{ textAlign: "center", fontSize: "0.9rem", color: "#777" }}
          >
            Collect more points and redeem them for exciting gifts, promos, and
            discounts.
          </Typography>
          <Button
            sx={{
              backgroundColor: "#3884FD",
              color: "#fff",
              textTransform: "none",
              fontWeight: "bold",
              padding: "0.8em 2em",
              "&:hover": { backgroundColor: "#2A6FD6" },
            }}
          >
            Redeem
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PointsModal;
