import { Box } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
// import For from "./components/For";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
// import { ThemeProviderWrapper } from "../../styles/ThemeContext";

const Landing = () => {
  return (
    // <ThemeProviderWrapper>
    // <CssBaseline />
    <Box
      sx={{
        // marginTop: "1em",
        // maxWidth: "1550px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Header />
        <Hero />
        <Box sx={{ width: "92%" }}>
          <About />
          <Features />
          <Services />
          {/* <For /> */}
          {/* <Contact /> */}
        </Box>
        <Footer />
      </Box>
    </Box>
    // </ThemeProviderWrapper>
  );
};

export default Landing;
