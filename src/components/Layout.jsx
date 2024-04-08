import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { CenteredBox } from "../styles/styled-components/styledBox";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Chat, Logout, MonetizationOnOutlined } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import logo from "../assets/logo.svg";
import { useDispatch } from "react-redux";
import { UserActions } from "../store/user-slice";

const drawerWidth = 240;

function Layout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

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
    dispatch(UserActions.logout());
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
                location.pathname === page.link ? "#3884FD" : "ingerit",
              color: location.pathname === page.link ? "#fff" : "#6c6c6c",
            }}
          >
            <ListItemButton onClick={() => navigate(page.link)} disableRipple>
              <ListItemIcon
                sx={{
                  color: location.pathname === page.link ? "#fff" : "#6c6c6c",
                }}
              >
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ marginTop: "9em" }}>
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
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#ececec",
        height: "100vh",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
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
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <CenteredBox
            sx={{
              justifyContent: "space-between",
              width: "99%",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">City Explorer</Typography>
            <Box sx={{ width: "2em" }}>
              <img src={logo} alt="" style={{ width: "100%" }} />
            </Box>
          </CenteredBox>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
        }}
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
            display: { xs: "block", md: "none" },
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
            display: { xs: "none", md: "block" },
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
        sx={{
          // width: { md: `calc(100% - ${drawerWidth}px)` },
          width: "100%",
          backgroundColor: "#ececec",
        }}
      >
        <Toolbar />
        <Box
          sx={{
            backgroundColor: "#ececec",
            padding: { xs: "1em", md: "1em 2em" },
            width: "100%",
          }}
        >
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
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    name: "Explore",
    link: "/explore",
    icon: <TravelExploreIcon />,
  },
  {
    id: 3,
    name: "Explore AI",
    link: "/explore-ai",
    icon: <Chat />,
  },
  {
    id: 4,
    name: "Wallet",
    link: "/wallet",
    icon: <AccountBalanceWalletIcon />,
  },
  {
    id: 5,
    name: "NFTs",
    link: "/points",
    icon: <MonetizationOnOutlined />,
  },
  {
    id: 6,
    name: "Search",
    link: "/search",
    icon: <SearchIcon />,
  },
  {
    id: 7,
    name: "Me",
    link: "/me",
    icon: <PersonOutlineIcon />,
  },
];

export default Layout;
