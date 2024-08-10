import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Wallet from "./pages/Wallet/Wallet";
import Me from "./pages/Me/Me";
import Auth from "./pages/Auth/Auth";
import ExploreAi from "./pages/ExploreAi/ExploreAi";
import Business from "./pages/Explore/Business";
import BusinessOpen from "./pages/Explore/BusinessOpen";
import RegisterBusiness from "./pages/Auth/RegisterBusiness";
import { useSelector } from "react-redux";
import Promos from "./pages/Home/Promos";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <Box sx={{ backgroundColor: "#ececec" }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-business" element={<RegisterBusiness />} />
        <Route path="*" element={<h1>URL does not exist</h1>} />
        <Route
          path="/"
          element={
            <Auth user={user}>
              <Layout />
            </Auth>
          }
        >
          <Route path="/home">
            <Route index element={<Home />} />
            <Route path="promos" element={<Promos />} />
          </Route>

          <Route path="/explore">
            <Route index element={<Business />} />
            <Route path="business" element={<BusinessOpen />} />
          </Route>

          <Route path="/explore-ai">
            <Route index element={<ExploreAi />} />
          </Route>

          <Route path="/wallet">
            <Route index element={<Wallet />} />
          </Route>

          {/* <Route path="/search">
            <Route index element={<Wallet />} />
          </Route> */}

          <Route path="/me">
            <Route index element={<Me />} />
          </Route>
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
