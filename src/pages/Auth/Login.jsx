/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  CircularProgress,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo.svg";
import { CenteredBox } from "../../styles/styled-components/styledBox";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { BgButton } from "../../styles/styled-components/styledButtons";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { UserActions } from "../../store/user-slice";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("Email is required"),
      password: yup.string().required("Password is required"),
    }),
    onSubmit: () => {
      handleLogin();
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = async () => {
    // e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formik.values),
        }
      );

      if (!response.ok) {
        // console.log(JSON.stringify(formik.values));
        alert("Failed to Log in! Please try again.");
        throw new Error("Failed to submit form");
      }
      const user = await response.json();
      // delete user.password;
      // console.log(user);
      // console.log("Form submitted successfully");
      dispatch(UserActions.login(user));
      navigate("/");
    } catch (error) {
      console.error("Error logging user in: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <CenteredBox
        sx={{
          height: "100vh",
        }}
      >
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
            Welcome back!
          </Typography>
          <CenteredBox
            sx={{
              flexDirection: "column",
              width: { xs: "100%", sm: "70%", md: "100%" },
              maxWidth: "350px",
            }}
            component="form"
            onSubmit={formik.handleSubmit}
          >
            <FormControl error fullWidth>
              <TextField
                type="email"
                id="email"
                label="Email"
                value={formik.values.email}
                name="email"
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={{ width: "100%", marginTop: "2em" }}
              />
            </FormControl>
            <FormControl error fullWidth>
              <TextField
                type={showPassword ? "text" : "password"}
                id="password"
                label="Password"
                value={formik.values.password}
                name="password"
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ width: "100%", marginTop: "1em" }}
              />
            </FormControl>
            <BgButton
              sx={{
                margin: "1em 0",
                width: "100%",
                color: "#fff",
                "&:hover": {
                  color: "#fff8",
                },
              }}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Login"
              )}
            </BgButton>
            <Link
              to="/register"
              style={{
                fontSize: "1rem",
                color: "#758BFD",
                textDecoration: "none",
                marginTop: "1em",
              }}
            >
              Don't have an account?
            </Link>
          </CenteredBox>
        </CenteredBox>
      </CenteredBox>
    </Box>
  );
};

export default Login;
