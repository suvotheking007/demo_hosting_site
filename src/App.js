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
});

function App() {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={colors}>
        <Header />
        <Container maxWidth="lg">
          <h1>Body</h1>
          <h1>Footer</h1>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
