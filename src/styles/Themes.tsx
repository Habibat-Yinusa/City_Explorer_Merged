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
          "--TextField-brandBorderColor": "#3884FD",
          "--TextField-brandBorderHoverColor": "#3884FD",
          "--TextField-brandBorderFocusedColor": "#3884FD",
          outline: "none",
          "& label.Mui-focused": {
            color: "#3884FD",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "1px solid #3884FD",
          borderRadius: "10px",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#3884FD",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#3884FD",
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
          "--TextField-brandBorderColor": "#3884FD",
          "--TextField-brandBorderHoverColor": "#3884FD",
          "--TextField-brandBorderFocusedColor": "#3884FD",
          borderColor: "#3884FD",
          "& label.Mui-focused": {
            color: "#3884FD",
            borderColor: "#3884FD",
          },
        },
      },
    },
  },
});

type Theme = {
  children?: any;
};

const Themes = ({ children }: Theme) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Themes;
