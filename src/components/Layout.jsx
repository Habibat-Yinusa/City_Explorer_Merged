import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { CenteredBox } from "../styles/styled-components/styledBox";
import { Logout } from "@mui/icons-material";

const drawerWidth = 240;

function Layout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const drawer = (
    <div>
      <CenteredBox sx={{ marginTop: "2em" }}>
        <Box sx={{ width: "3em" }}>
          <img src={logo} alt="" style={{ width: "100%" }} />
        </Box>
      </CenteredBox>
      <List>
        {pageLinks.map((page) => (
          <ListItem
            key={page.id}
            disablePadding
            sx={{
              backgroundColor:
                location.pathname === page.link ? "#758BFD" : "ingerit",
              color: location.pathname === page.link ? "#fff" : "#6c6c6c",
            }}
          >
            <ListItemButton onClick={() => navigate(page.link)} disableRipple>
              <ListItemIcon
                sx={{
                  color: location.pathname === page.link ? "#fff" : "#6c6c6c",
                }}
              >
                {page.id % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ marginTop: "13em" }}>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary={"Log out"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex", backgroundColor: "#ececec", height: "100vh" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#ececec",
          boxShadow: "none",
          color: "#1e1e1e",
        }}
      >
        <Toolbar sx={{ borderBottom: "1px solid #cfcfcf" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            City Explorer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#ececec",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#ececec",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box sx={{ backgroundColor: "#ececec" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

const pageLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Explore",
    link: "/explore",
  },
  {
    id: 3,
    name: "Wallet",
    link: "/wallet",
  },
  {
    id: 4,
    name: "Search",
    link: "/search",
  },
  {
    id: 5,
    name: "Me",
    link: "/me",
  },
];

export default Layout;
