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
import cityLogo from "../../assets/city-logo.png";
import { CenteredBox } from "../../styles/styled-components/styledBox";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { BgButton } from "../../styles/styled-components/styledButtons";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../store/user-slice";
import { useLoginMutation } from "./authApiSlice";

const Login = () => {
  interface loginInput {
    email: string;
    password: string;
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("Email is required"),
      password: yup.string().required("Password is required"),
    }),
    onSubmit: (values: loginInput) => {
      handleLogin(values);
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [loginRequest, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = async (values: loginInput) => {
    try {
      const userData = await loginRequest(values).unwrap();
      dispatch(
        login({
          token: userData.token,
          details: userData.details,
        })
      );
      navigate("/home");
    } catch (error: any) {
      if (error.status === 401 || error.status === 404) {
        alert("Incorrect username or passsord");
      } else {
        alert("Something went wrong");
      }
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
              color: "#3884FD",
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
          <Box sx={{ width: "20em" }}>
            <img src={cityLogo} style={{ width: "100%" }} />
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "#3884FD", fontSize: "1.9em", fontWeight: 900 }}
          >
            Welcome
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Login"
              )}
            </BgButton>
            <Link
              to="/register"
              style={{
                fontSize: "1rem",
                color: "#3884FD",
                textDecoration: "none",
                marginTop: "1em",
              }}
            >
              Don't have an account?
            </Link>
            <Link
              to="/explore-maps"
              style={{
                fontSize: "1.3rem",
                color: "#3884FD",
                textDecoration: "none",
                marginTop: ".7em",
                fontWeight: 1000,
              }}
            >
              Explore our maps?
            </Link>
          </Box>
        </CenteredBox>
      </CenteredBox>
    </Box>
  );
};

export default Login;
