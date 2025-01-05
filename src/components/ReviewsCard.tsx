import { MoreVert, Person } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Rating,
  Typography,
} from "@mui/material";
import { useState } from "react";

interface ReviewsCardProps {
  sender: string;
  reciever: string;
  message: string;
  rating: number;
  isMyReview: boolean;
}

const ReviewsCard = ({
  sender,
  reciever,
  rating,
  message,
  isMyReview,
}: ReviewsCardProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "30px",
        padding: "1.2em",
        width: "100%",
        margin: "1.5em 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            margin: ".5em",
          }}
        >
          <Box
            sx={{
              padding: ".3em",
              backgroundColor: "#ECECEC",
              borderRadius: "10px",
            }}
          >
            <Person sx={{ color: "#758BFD", fontSize: "2rem" }} />
          </Box>
          <Typography variant="body2" sx={{ fontSize: "1rem" }}>
            <span style={{ textTransform: "capitalize" }}>{sender}</span> to{" "}
            <span style={{ color: "#758BFD", textTransform: "capitalize" }}>
              {reciever}
            </span>
          </Typography>
        </Box>
        {isMyReview && (
          <IconButton onClick={handleClick}>
            <MoreVert />
          </IconButton>
        )}
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            paper: {
              style: {
                width: "20ch",
              },
            },
          }}
        >
          <MenuItem onClick={handleClose}>Edit Review</MenuItem>
          <MenuItem onClick={handleClose}>Delete Review</MenuItem>
        </Menu>
      </Box>
      <Box>
        <Rating name="read-only" value={rating} readOnly size="small" />
        <Typography variant="body2" sx={{ fontSize: ".9rem" }}>
          {message}
        </Typography>
      </Box>
    </Box>
  );
};

export default ReviewsCard;
