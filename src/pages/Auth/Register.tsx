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
import cityLogo from "../../assets/city-logo.png";
import { CenteredBox } from "../../styles/styled-components/styledBox";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { BgButton } from "../../styles/styled-components/styledButtons";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./authApiSlice";

const Register = () => {
  interface registerInput {
    email: string;
    username: string;
    password: string;
  }

  const formik = useFormik<registerInput & { confirmPassword: string }>({
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
        .oneOf([yup.ref("password")], "Passwords much match")
        .required("Please confirm your password"),
    }),
    onSubmit: (values: registerInput) => {
      handleRegister(values);
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickedShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleRegister = async (values: registerInput) => {
    try {
      await register(values).unwrap();
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Something went wrong! Please try again");
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
            padding: "0em 5em",
            width: { xs: "100%", md: "50%" },
            // width: { xs: "90vw", md: "50vw" },
            minHeight: "88vh",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#3884FD", fontSize: "1.9em", fontWeight: 900 }}
          >
            Create an account
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
                "Sign up"
              )}
            </BgButton>
            <Link
              to="/"
              style={{
                fontSize: "1rem",
                color: "#3884FD",
                textDecoration: "none",
                marginTop: "1em",
              }}
            >
              Login?
            </Link>
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
          <Box sx={{ width: "25em" }}>
            <img src={cityLogo} alt="" style={{ width: "100%" }} />
          </Box>
          {/* <Typography
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
          </Typography> */}
        </CenteredBox>
      </CenteredBox>
    </Box>
  );
};

export default Register;
