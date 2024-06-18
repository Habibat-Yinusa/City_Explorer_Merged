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
import {
  Chat,
  Logout,
  Notifications,
  Person,
  SmartToy,
} from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import logo from "../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../store/user-slice";
import { FilledButton } from "../styles/styled-components/styledButtons";

const drawerWidth = 240;

function Layout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const user = useSelector((state) => state.auth.user);
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
      <List>
        <Toolbar />
        {pageLinks.map((page) => (
          <ListItem
            key={page.id}
            disablePadding
            // sx={{
            //   backgroundColor:
            //     location.pathname === page.link ? "#758BFD" : "inherit",
            //   color: location.pathname === page.link ? "#fff" : "#6c6c6c",
            //   // margin: ".3em",
            // }}
          >
            <ListItemButton
              onClick={() => navigate(page.link)}
              disableRipple
              sx={{
                margin: ".2em .7em",
                backgroundColor:
                  location.pathname === page.link ? "#758BFD" : "inherit",
                color: location.pathname === page.link ? "#fff" : "#6c6c6c",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#6E83F3",
                  color: "#fff",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "inherit",
                }}
              >
                {page.icon}
              </ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ marginTop: "11em" }}>
          <ListItemButton
            onClick={handleLogout}
            sx={{
              margin: "0 .7em",
              backgroundColor: "inherit",
              color: "#6c6c6c",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#6E83F3",
                color: "#fff",
              },
            }}
          >
            <ListItemIcon sx={{ color: "inherit" }}>
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
              padding: "1em 0",
            }}
          >
            <Box sx={{ width: "3em" }}>
              <img src={logo} alt="" style={{ width: "100%" }} />
            </Box>
            {/* <Typography variant="h6">City Explorer</Typography> */}
            <FilledButton
              sx={{ textTransform: "capitalize", gap: 1 }}
              onClick={() => navigate(`/me`)}
            >
              <Person /> {user?.username}
            </FilledButton>
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
        {/* <Toolbar /> */}
        <Box
          sx={{
            backgroundColor: "#ececec",
            padding: { xs: "1em", md: "1em 2em" },
            width: "100%",
          }}
        >
          <Toolbar />
          <Toolbar />
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
    name: "Wallet",
    link: "/wallet",
    icon: <AccountBalanceWalletIcon />,
  },
  {
    id: 4,
    name: "Chat",
    link: "#",
    icon: <Chat />,
  },
  {
    id: 5,
    name: "Explore AI",
    link: "/explore-ai",
    icon: <SmartToy />,
  },
  // {
  //   id: 5,
  //   name: "NFTs",
  //   link: "/points",
  //   icon: <MonetizationOnOutlined />,
  // },
  {
    id: 6,
    name: "Notification",
    link: "/search",
    icon: <Notifications />,
  },
  // {
  //   id: 7,
  //   name: "Me",
  //   link: "/me",
  //   icon: <PersonOutlineIcon />,
  // },
];

export default Layout;
