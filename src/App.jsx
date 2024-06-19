import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
// import Explore from "./pages/Explore/Explore";
import Wallet from "./pages/Wallet/Wallet";
import Search from "./pages/Search/Search";
import Me from "./pages/Me/Me";
import Auth from "./pages/Auth/Auth";
import ExploreAi from "./pages/ExploreAi/ExploreAi";
import Points from "./pages/Points/Points";
import Business from "./pages/Explore/Business";
import BusinessOpen from "./pages/Explore/BusinessOpen";
import RegisterBusiness from "./pages/Auth/RegisterBusiness";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",
    element: <Business />,
  },
  {
    path: "/business",
    element: <BusinessOpen />,
  },
  {
    path: "/explore-ai",
    element: <ExploreAi />,
  },
  {
    path: "/wallet",
    element: <Wallet />,
  },
  {
    path: "/points",
    element: <Points />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/me",
    element: <Me />,
  },
];

function App() {
  return (
    <Box sx={{ backgroundColor: "#ececec" }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-business" element={<RegisterBusiness />} />
        {routes.map((route) => (
          <Route
            path="/"
            element={
              <Auth>
                <Layout />
              </Auth>
            }
            key={route.path}
          >
            <Route path={route.path} element={route.element} />
          </Route>
        ))}
      </Routes>
    </Box>
  );
}

export default App;
