import { Box, Typography, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { ArrowForwardIos } from "@mui/icons-material";
import {
  selectCurrentBusinessName,
  selectCurrentUsername,
  selectCurrentUserRole,
} from "../../store/user-slice";
import profileImg from "../../assets/profileImg.svg";

interface EmptyStateProps {
  onMessageClick: (message: string) => void;
}

const EmptyState = ({ onMessageClick }: EmptyStateProps) => {
  const role = useSelector(selectCurrentUserRole);
  const username = useSelector(selectCurrentUsername);
  const businessName = useSelector(selectCurrentBusinessName);

  const handleMessageClick = (message: string) => {
    onMessageClick(message);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ height: "66vh", width: "80%" }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Box sx={{ width: "3em" }}>
              <img src={profileImg} style={{ width: "100%" }} />
            </Box>
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  sm: {
                    xs: { xs: ".7rem", md: "1rem" },
                    sm: "1.2rem",
                    md: "1.5rem",
                  },
                  md: "2rem",
                },
                fontWeight: 800,
              }}
            >
              Good day{" "}
              <span style={{ color: "#3884FD" }}>
                {role != "business" ? username : businessName}
              </span>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "1em 0",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xs: { xs: ".7rem", md: "1rem" },
                  sm: "1.2rem",
                  md: "1.5rem",
                },
                fontWeight: 800,
              }}
            >
              Recent chats
            </Typography>
            <IconButton
              sx={{ color: "#000" }}
              onClick={() => console.log("Clicked")}
            >
              <ArrowForwardIos />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "1em",
                borderRadius: "30px",
                border: "1px solid #E6E6E6",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: ".7rem", md: "1rem" },
                  cursor: "pointer",
                }}
                onClick={() => console.log("Clicked")}
              >
                List of cinemas
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "1em",
                borderRadius: "30px",
                border: "1px solid #E6E6E6",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: ".7rem", md: "1rem" },
                  cursor: "pointer",
                }}
                onClick={() => console.log("Clicked")}
              >
                Businesses that offer home services to
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "1em 0",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xs: { xs: ".7rem", md: "1rem" },
                  sm: "1.2rem",
                  md: "1.5rem",
                },
                fontWeight: 800,
              }}
            >
              Explore more
            </Typography>
            <IconButton
              sx={{ color: "#000" }}
              onClick={() => console.log("Clicked")}
            >
              <ArrowForwardIos />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "1em",
                borderRadius: "30px",
                border: "1px solid #E6E6E6",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: ".7rem", md: "1rem" },
                  cursor: "pointer",
                }}
                onClick={() => handleMessageClick("Date ideas in Abuja")}
              >
                Date ideas in Abuja
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "1em",
                borderRadius: "30px",
                border: "1px solid #E6E6E6",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: ".7rem", md: "1rem" },
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleMessageClick("Nice places to visit in Abuja")
                }
              >
                Nice places to visit in Abuja
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyState;
