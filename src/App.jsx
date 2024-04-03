import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Wallet from "./pages/Wallet/Wallet";
import Search from "./pages/Search/Search";
import Me from "./pages/Me/Me";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/wallet",
    element: <Wallet />,
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
    <Box>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {routes.map((route) => (
          <Route path="/" element={<Layout />} key={route.path}>
            <Route path={route.path} element={route.element} />
          </Route>
        ))}
      </Routes>
    </Box>
  );
}

export default App;
