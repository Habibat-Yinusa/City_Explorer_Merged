import { Close } from "@mui/icons-material";
import {
  Modal,
  Box,
  Typography,
  Button,
  Divider,
  IconButton,
} from "@mui/material";

type BillingModalProps = {
  open: boolean;
  onClose: () => void;
};

const BillingModal = ({ open, onClose }: BillingModalProps) => {
  const paymentMethods = [
    { id: 1, type: "Visa", lastFour: "4567" },
    { id: 2, type: "MasterCard", lastFour: "4567" },
    { id: 3, type: "Custom", name: "eeshatthecuteone" },
  ];

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
          maxWidth: "500px",
          width: "90%",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Payment and Billing
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
          Keep track of and update your payment methods on Explore
        </Typography>
        <Box>
          {paymentMethods.map((method) => (
            <Box
              key={method.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1em",
              }}
            >
              <Typography>
                {method.type === "Custom"
                  ? method.name
                  : `${method.type} **** **** ${method.lastFour}`}
              </Typography>
              <Button sx={{ textTransform: "none", color: "#3884FD" }}>
                Edit
              </Button>
            </Box>
          ))}
          <Divider />
          <Typography
            variant="body2"
            sx={{
              marginTop: "1em",
              color: "#777",
              fontSize: "0.85rem",
            }}
          >
            Secure Your Payment Information
          </Typography>
          <Typography
            variant="body2"
            sx={{
              marginBottom: "1em",
              color: "#555",
              fontSize: "0.9rem",
            }}
          >
            Encryption: Your payment details are encrypted to protect your
            information. Transactions are processed through secure and trusted
            gateways.
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
            Add Card
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default BillingModal;
