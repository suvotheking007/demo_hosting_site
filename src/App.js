import "@fontsource/roboto";

import React from "react";

import Header from "./components/Header";

import { CssBaseline, Container } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const colors = createTheme({
  palette: {
    primary: {
      main: "#047aed",
      dark: "#002240",
      light: "#f4f4f4",
      indication: {
        error: "#d9534f",
        success: "#5cb85c",
      },
    },
    secondary: {
      main: "#1c3fa8",
    },
  },
  breakpoints: {
    values: {
      cnt: 1200,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={colors}>
      <CssBaseline />

      <Header />
      <Container maxWidth="md">
        <h1>Body</h1>
        <h1>Footer</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
