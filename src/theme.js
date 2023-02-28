import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "26px",
    fontWeight: 400,

    h1: {
      fontFamily: "Roboto",
      fontSize: "40px",
      lineHeight: "40px",
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      main: "#F4E041",
      hover: "#FFE302",
    },
    secondary: {
      main: "#00BDD3",
    },
    error: {
      main: red.A400,
    },
    background: {
      main: "#F8F8F8",
    },
  },
});

export default theme;
