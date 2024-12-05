import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Rating,
} from "@mui/material";
import ProfileSidebar from "../../../components/ProfileSidebar";
import { MoreVert, Person } from "@mui/icons-material";
import { useState } from "react";

const Reviews = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ProfileSidebar>
      <Box>
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "#000", fontWeight: 700, fontSize: "1.8rem" }}
          >
            Reviews
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#000", fontSize: "1rem", margin: "1em 0" }}
          >
            Easily find all reviews you've written here
          </Typography>

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
                  Aisha Eeshat to{" "}
                  <span style={{ color: "#758BFD" }}>Aisha's Scents</span>
                </Typography>
              </Box>
              <IconButton onClick={handleClick}>
                <MoreVert />
              </IconButton>
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
              <Rating name="read-only" value={4} readOnly size="small" />
              <Typography variant="body2" sx={{ fontSize: ".9rem" }}>
                They have amazing burgers and their staffs are really nice. I
                highly recommend. 😁😋
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </ProfileSidebar>
  );
};

export default Reviews;
