import { Button, createTheme } from "@mui/material";
import { orange, red } from "@mui/material/colors";
import { light } from "@mui/material/styles/createPalette";
import { ThemeProvider } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom/client";
import ContactForm from "./components/Contact/ContactForm";
import "./index.css";
import Gallery from "./components/Gallery/gallery";
const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
      contrastText: "#fff",
    },
  },
  spacing: 10,
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContactForm />
    </ThemeProvider>
    <Gallery />
  </React.StrictMode>
);
