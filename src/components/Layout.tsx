import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  // Chat,
  Logout,
  // Notifications,
  Person,
  SmartToy,
} from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import citylogo from "../assets/city-logo.png";
import { useDispatch, useSelector } from "react-redux";
import menuIconLogo from "../assets/menu-icon.svg";
import {
  logout,
  selectCurrentBusinessName,
  selectCurrentUsername,
  selectCurrentUserRole,
} from "../store/user-slice";
import { CenteredBox } from "../styles/styled-components/styledBox";
import { FilledButton } from "../styles/styled-components/styledButtons";

const drawerWidth = 200;

function Layout() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const username = useSelector(selectCurrentUsername);
  const businessName = useSelector(selectCurrentBusinessName);
  const role = useSelector(selectCurrentUserRole);
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
    dispatch(logout());
    navigate("/");
  };

  const headerLinkToUse = location.pathname.includes("/explore/business")
    ? "business"
    : "explore";

  const drawer = (
    <div>
      <List
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <Toolbar />
        <Box sx={{ height: "100%" }}>
          {pageLinks.map((page) => (
            <ListItem key={page.id} disablePadding>
              <ListItemButton
                onClick={() => navigate(page.link)}
                disableRipple
                sx={{
                  margin: ".2em .7em",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  width: "100%",
                  backgroundColor: location.pathname.includes(page.link)
                    ? "#3884FD"
                    : "inherit",
                  color: location.pathname.includes(page.link)
                    ? "#fff"
                    : "#6c6c6c",
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "#6E83F3",
                    color: "#fff",
                  },
                }}
              >
                <Box>{page.icon}</Box>
                <Typography variant="body2" sx={{ textAlign: "left" }}>
                  {page.name}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleLogout}
            disableRipple
            sx={{
              margin: ".2em .7em",
              display: "flex",
              // justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
              width: "100%",
              // border: "1px solid red",
              backgroundColor: "inherit",
              color: "#6c6c6c",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#6E83F3",
                color: "#fff",
              },
            }}
          >
            <Box>
              <Logout />
            </Box>
            <Typography variant="body2" sx={{ textAlign: "left" }}>
              Log out
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#fff",
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "space-evenly", md: "space-between" },
              width: "100%",
              padding: "1em 0",
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" } }}
              disableRipple
            >
              <Box sx={{ width: "1em" }}>
                <img src={menuIconLogo} style={{ width: "100%" }} />
              </Box>
            </IconButton>
            <CenteredBox
              sx={{
                justifyContent: { xs: "space-evenly", md: "space-between" },
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box sx={{ width: "7em", display: { xs: "none", md: "block" } }}>
                <img src={citylogo} alt="" style={{ width: "100%" }} />
              </Box>
              {/* <Typography variant="h6">City Explorer</Typography> */}
              <Box
                sx={{
                  width: { xs: "70%", md: "20%" },
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {location.pathname.includes("explore") &&
                  headerLinks[headerLinkToUse].map((link) => (
                    <Typography
                      key={link.id}
                      variant="body2"
                      sx={{
                        fontSize: "1rem",
                        color:
                          location.pathname === link.link ? "#3884FD" : "#000",
                        textDecoration: "none",
                        cursor: "pointer",
                        gap: 2,
                        "&:hover": {
                          color: "#3884FD",
                        },
                      }}
                      onClick={() => navigate(link.link)} // navigate to the correct link
                    >
                      {link.name}
                    </Typography>
                  ))}
              </Box>
              <FilledButton
                sx={{
                  textTransform: "capitalize",
                  gap: 1,
                  display: { xs: "none", md: "flex" },
                }}
                onClick={() => navigate(`/me`)}
              >
                <Person /> {role != "business" ? username : businessName}
              </FilledButton>
              <FilledButton
                sx={{
                  textTransform: "capitalize",
                  gap: 1,
                  display: { xs: "flex", md: "none" },
                  width: "1em",
                }}
                onClick={() => navigate(`/me`)}
              >
                <Person />
              </FilledButton>
            </CenteredBox>
          </Box>
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
              backgroundColor: "#fff",
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
              backgroundColor: "#fff",
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
          backgroundColor: "#fff",
        }}
      >
        {/* <Toolbar /> */}
        <Box
          sx={{
            backgroundColor: "#ececec",
            padding: { xs: "1em", md: "1em 2em" },
            width: "100%",
            minHeight: "100vh",
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
    link: "/home",
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
  // {
  //   id: 4,
  //   name: "Chat",
  //   link: "#",
  //   icon: <Chat />,
  // },
  {
    id: 5,
    name: "Explore AI",
    link: "/ai",
    icon: <SmartToy />,
  },
  // {
  //   id: 6,
  //   name: "Notification",
  //   link: "/search",
  //   icon: <Notifications />,
  // },
];

const headerLinks = {
  explore: [
    { id: 1, name: "Explore", link: "/explore" },
    { id: 2, name: "Event", link: "/explore/event" },
    { id: 3, name: "Collections", link: "/explore/collections" },
  ],
  business: [
    { id: 1, name: "Services", link: "/explore/services" },
    { id: 2, name: "Info", link: "/explore/info" },
    { id: 3, name: "Reviews", link: "/explore/reviews" },
  ],
};

export default Layout;
