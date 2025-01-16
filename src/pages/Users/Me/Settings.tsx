import { Box, Typography, Switch, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProfileSidebar from "../../../components/ProfileSidebar";

const Settings = () => {
  const navigate = useNavigate();

  const settingsOptions = [
    { id: 1, label: "Push notifications", type: "toggle" },
    { id: 2, label: "Email Notification", type: "toggle" },
    { id: 3, label: "Direct Messaging", type: "toggle" },
    { id: 4, label: "Preferences", type: "link", link: "preferences" },
    {
      id: 5,
      label: "Theme",
      type: "link",
      link: "theme",
      description: "Light",
    },
    { id: 6, label: "Security and Login", type: "link", link: "security" },
    { id: 7, label: "Location Settings", type: "link", link: "location" },
    {
      id: 8,
      label: "Logout",
      type: "button",
      action: () => console.log("Logged out"),
    },
  ];

  return (
    // <ProfileSidebar>
    <Box sx={{ padding: "1.5em" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, fontSize: "1.8rem", marginBottom: "0.5em" }}
      >
        Settings
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontSize: "1rem", color: "#555", marginBottom: "1.5em" }}
      >
        Customize your Explore app here
      </Typography>

      <Box>
        {settingsOptions.map((option) => (
          <Box
            key={option.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1em",
              padding: "0.8em 1em",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box>
              <Typography
                variant="body1"
                sx={{ fontSize: "1rem", fontWeight: 500 }}
              >
                {option.label}
              </Typography>
              {option.description && (
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.85rem", color: "#888" }}
                >
                  {option.description}
                </Typography>
              )}
            </Box>
            {option.type === "toggle" && <Switch />}
            {option.type === "link" && option.link && (
              <Button
                onClick={() => navigate(option.link)}
                sx={{
                  color: "#3884FD",
                  textTransform: "none",
                  fontWeight: "500",
                  fontSize: "0.9rem",
                }}
              >
                {option.description || ">"}
              </Button>
            )}
            {option.type === "button" && (
              <Button
                onClick={option.action}
                sx={{
                  backgroundColor: "#FF4C4C",
                  color: "#fff",
                  padding: "0.5em 1em",
                  textTransform: "none",
                  fontWeight: 500,
                  "&:hover": { backgroundColor: "#FF6666" },
                }}
              >
                {option.label}
              </Button>
            )}
          </Box>
        ))}
      </Box>
    </Box>
    // </ProfileSidebar>
  );
};

export default Settings;
