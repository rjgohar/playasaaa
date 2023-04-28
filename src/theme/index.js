import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
      blue: "#0061E0",
    },
    primary: { main: "#174468", light: "#365B6D" },
    secondary: {
      main: "#5CC2BA",
      light: "#4998DA",
      grey: "#7C8893",
    },
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF",
      footer: "#004368",
      main: "#424242",
    },
    text: {
      main: "#999999",
    },
    grey: {
      100: "#FFFBF0",
      500: "#4D4D4D",
    },
  },
  typography: {
    fontFamily: ["Poppins, sans-serif", '"Playfair Display,sans-serif"'].join(
      ","
    ),
  },
});
export default theme;
