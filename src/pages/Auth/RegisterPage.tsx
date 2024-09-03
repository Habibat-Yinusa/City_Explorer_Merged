/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from "@mui/material";
import logo from "../../assets/logo.svg";
import { CenteredBox } from "../../styles/styled-components/styledBox";
import { useState } from "react";
import UserTypeSelect from "../../styles/styled-components/UserTypeSelect";
import { BgButton } from "../../styles/styled-components/styledButtons";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [userType, setUserType] = useState("");

  const handleUserTypeChange = (type: string) => {
    setUserType(type);
  };

  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#ececec", height: "100vh" }}>
      <CenteredBox
        sx={{
          height: "100%",
        }}
      >
        <CenteredBox
          sx={{
            backgroundColor: "#ececec",
            flexDirection: "column",
            padding: "0em 5em",
            width: { xs: "100%", md: "50%" },
            // width: { xs: "90vw", md: "50vw" },
            minHeight: "88vh",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#758BFD", fontSize: "1.9em", fontWeight: 900 }}
          >
            Welcome
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: "1.2em", margin: "1em 0" }}
          >
            Please select your user type below
          </Typography>
          <Box
            sx={{
              marginTop: "3em",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <UserTypeSelect onChange={handleUserTypeChange} />
            <BgButton
              sx={{
                margin: "3em 0",
                width: "50%",
                color: "#fff",
                "&:hover": {
                  color: "#fff8",
                },
              }}
              onClick={() => navigate(`${userType}`)}
            >
              Create Account
            </BgButton>
          </Box>
        </CenteredBox>
        <CenteredBox
          sx={{
            backgroundColor: "#fff",
            flexDirection: "column",
            padding: "0em 5em",
            width: "50%",
            minHeight: "100vh",
            // borderRadius: "10px",
            display: { xs: "none", md: "flex" },
          }}
        >
          <Box sx={{ width: "10em" }}>
            <img src={logo} alt="" style={{ width: "100%" }} />
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "#758BFD",
              fontSize: "2.2em",
              fontWeight: 900,
              textTransform: "uppercase",
              marginTop: ".2em",
            }}
          >
            City Explorer
          </Typography>
        </CenteredBox>
      </CenteredBox>
    </Box>
  );
};

export default RegisterPage;
