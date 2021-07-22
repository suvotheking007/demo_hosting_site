import "@fontsource/roboto";

import React from "react";

import Header from "./head_components/Header";

import globalTheme from "./customTheme";
import { CssBaseline, Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={globalTheme}>
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
