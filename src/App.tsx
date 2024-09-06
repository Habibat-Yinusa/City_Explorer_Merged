import { Box } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/RegisterPage";
import Register from "./pages/Auth/Register";
import Layout from "./components/Layout";
import Home from "./pages/Users/Home/Home";
import Wallet from "./pages/Users/Wallet/Wallet";
import Me from "./pages/Users/Me/Me";
import Auth from "./pages/Auth/Auth";
import Business from "./pages/Users/Explore/Business";
import BusinessOpen from "./pages/Users/Explore/BusinessOpen";
// import RegisterBusiness from "./pages/Users/Auth/RegisterBusiness";
import { useDispatch, useSelector } from "react-redux";
import Promos from "./pages/Users/Home/Promos";
import Favorites from "./pages/Users/Me/Favorites";
import "@splidejs/react-splide/css";
import { login, selectCurrentUser } from "./store/user-slice";
import ExploreAi from "./pages/Users/ExploreAi/ExploreAi";
import { useEffect } from "react";

function App() {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    //log the user back in with local storage data
    const userString = localStorage.getItem("userState");
    if (userString) {
      const user = JSON.parse(userString) as any;
      const userData = user.user;

      dispatch(login(userData));
    }
  }, []);

  useEffect(() => {
    //route the user to dashboard, if a logged in user tries to access signin page
    if (user && location.pathname === "/") {
      navigate("/home");
    }
  }, [navigate, user]);

  return (
    <Box sx={{ backgroundColor: "#ececec" }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/individual" element={<Register />} />
        {/* <Route path="/register-business" element={<RegisterBusiness />} /> */}
        <Route path="*" element={<h1>URL does not exist</h1>} />
        <Route
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

          <Route path="/ai">
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
            <Route path="favorites" element={<Favorites />} />
          </Route>
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
