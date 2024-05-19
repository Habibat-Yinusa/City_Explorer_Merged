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
import { FilledButton } from "../../styles/styled-components/styledButtons";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("Email is required"),
      username: yup.string().required("Username is required"),
      password: yup.string().required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords much match")
        .required("Please confirm your password"),
    }),
    onSubmit: () => {
      handleRegister();
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickedShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleRegister = async () => {
    setLoading(true);
    // console.log(import.meta.env.VITE_APP_API_URL);
    // e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/user/signup`,
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
        alert("Failed to Register User");
        setLoading(false);
        throw new Error("Failed to submit form");
      }
      // const user = await response.json();
      // delete user.password;
      // console.log(user);
      // console.log("Form submitted successfully");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      console.error("Error submitting form: ", error.message);
    }
  };

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
            padding: "0 5em",
            width: { xs: "90vw", md: "50vw" },
            borderRadius: "10px",
            minHeight: "88vh",
          }}
        >
          <Box sx={{ width: "4em" }}>
            <img src={logo} alt="" style={{ width: "100%" }} />
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "#3884FD", fontSize: "2.2em", fontWeight: 900 }}
          >
            Create an account
          </Typography>
          <CenteredBox
            sx={{
              flexDirection: "column",
              width: { xs: "100%", sm: "70%", md: "60%" },
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
                type="text"
                id="username"
                label="Username"
                value={formik.values.username}
                name="username"
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
                sx={{ width: "100%", marginTop: "1em" }}
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
            <FormControl error fullWidth>
              <TextField
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                label="Confirm Password"
                value={formik.values.confirmPassword}
                name="confirmPassword"
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="start"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <IconButton onClick={handleClickedShowConfirmPassword}>
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ width: "100%", marginTop: "1em" }}
              />
            </FormControl>
            <FilledButton
              sx={{
                margin: "1em 0",
                width: "100%",
                color: "#fff",
                "&:hover": {
                  color: "#1976D2",
                },
              }}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Sign up"
              )}
            </FilledButton>
            <Link
              to="/login"
              style={{
                fontSize: "1rem",
                color: "#3884FD",
                textDecoration: "none",
                marginTop: "1em",
              }}
            >
              Login?
            </Link>
          </CenteredBox>
        </CenteredBox>
      </CenteredBox>
    </Box>
  );
};

export default Register;
