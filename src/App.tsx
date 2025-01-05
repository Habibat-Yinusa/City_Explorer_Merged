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
import BusinessOpen from "./pages/Users/Explore/BusinessOpen";
// import RegisterBusiness from "./pages/Users/Auth/RegisterBusiness";
import { useDispatch, useSelector } from "react-redux";
import Promos from "./pages/Users/Home/Promos";
import Favorites from "./pages/Users/Me/Favorites";
import "@splidejs/react-splide/css";
import { login, selectCurrentUser } from "./store/user-slice";
import ExploreAi from "./pages/Users/ExploreAi/ExploreAi";
import { useEffect } from "react";
import NewBusiness from "./pages/Business/Home/NewBusiness";
import Explore from "./pages/Users/Explore/Explore";
import Events from "./pages/Users/Explore/Events";
import Collections from "./pages/Users/Explore/Collections";
import MapExplore from "./pages/maps/Map";
import Services from "./pages/Users/Me/Services";
import Info from "./pages/Users/Me/Info";
import Reviews from "./pages/Users/Me/Reviews";
import Photos from "./pages/Users/Me/Photos";
import Settings from "./pages/Users/Me/Settings";
import BusinessServices from "./pages/Users/Explore/BusinessServices";
import BusinessInfo from "./pages/Users/Explore/BusinessInfo";
import BusinessReviews from "./pages/Users/Explore/BusinessReviews";

function App() {
  const user = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Log the user back in with local storage data
    const userStateString = localStorage.getItem("userState");
    if (userStateString) {
      const userState = JSON.parse(userStateString) as any;
      dispatch(login(userState));
    }
  }, [dispatch]);

  useEffect(() => {
    // Route the user to dashboard if a logged-in user tries to access signin page
    if (
      user &&
      (location.pathname === "/" ||
        location.pathname === "/register" ||
        location.pathname === "/register/individual" ||
        location.pathname === "/register/business")
    ) {
      navigate("/home");
    }
  }, [navigate, user]);

  return (
    <Box sx={{ backgroundColor: "#ececec" }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/individual" element={<Register />} />
        <Route path="/register/business" element={<NewBusiness />} />
        <Route path="/explore-maps" element={<MapExplore />} />
        <Route path="*" element={<h1>URL does not exist</h1>} />
        {user?.role != "business" ? (
          <Route
            element={
              <Auth user={user}>
                <Layout />
              </Auth>
            }
          >
            <Route path="/home">
              <Route index element={<Home />} />
              <Route path="promos/:id" element={<Promos />} />
            </Route>

            <Route path="/explore">
              <Route index element={<Explore />} />
              <Route path=":businessId" element={<BusinessServices />} />
              <Route path="business" element={<BusinessOpen />} />
              <Route path="event" element={<Events />} />
              <Route path="collections" element={<Collections />} />
              <Route path=":businessId/info" element={<BusinessInfo />} />
              <Route path=":businessId/reviews" element={<BusinessReviews />} />
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
              <Route path="services" element={<Services />} />
              <Route path="info" element={<Info />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="photos" element={<Photos />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
        ) : (
          <Route
            element={
              <Auth user={user}>
                <Layout />
              </Auth>
            }
          >
            <Route path="/home">
              <Route index element={<Home />} />
              <Route path="promos/:id" element={<Promos />} />
            </Route>

            <Route path="/explore">
              <Route index element={<Explore />} />
              <Route path="business" element={<BusinessOpen />} />
              <Route path="event" element={<Events />} />
              <Route path="collections" element={<Collections />} />
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
              <Route index element={<Services />} />
              <Route path="favorites" element={<Favorites />} />
              {/* <Route path="services" element={<Services />} /> */}
              <Route path="info" element={<Info />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        )}
      </Routes>
    </Box>
  );
}

export default App;
