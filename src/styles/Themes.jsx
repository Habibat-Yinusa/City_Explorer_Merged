/* eslint-disable react/prop-types */
import { ThemeProvider } from "@emotion/react";
import { createTheme, outlinedInputClasses } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      "nunito",
      "nunito sans",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#758BFD",
          "--TextField-brandBorderHoverColor": "#758BFD",
          "--TextField-brandBorderFocusedColor": "#758BFD",
          outline: "none",
          "& label.Mui-focused": {
            color: "#758BFD",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "1px solid #758BFD",
          borderRadius: "10px",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#758BFD",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#758BFD",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&::before": {
            borderBottom: "1px solid #787878",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "1px solid var(--TextField-brandBorderHoverColor)",
          },
          "&.Mui-focused:after": {
            borderBottom: "1px solid var(--TextField-brandBorderFocusedColor)",
          },
        },
      },
    },
    // MuiButton: {
    //   styleOverrides: {
    //     contained: {
    //       backgroundColor: "#2FD4C7",
    //       textTransform: "none",
    //       boxShadow: "none",
    //       "&:hover": {
    //         backgroundColor: "#20958c",
    //       },
    //     },
    //   },
    // },
    MuiSelect: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#758BFD",
          "--TextField-brandBorderHoverColor": "#758BFD",
          "--TextField-brandBorderFocusedColor": "#758BFD",
          borderColor: "#758BFD",
          "& label.Mui-focused": {
            color: "#758BFD",
            borderColor: "#758BFD",
          },
        },
      },
    },
  },
});

const Themes = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Themes;
