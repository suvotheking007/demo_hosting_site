import "@fontsource/roboto";

import React from "react";

import Header from "./head_components/Header";
import Body from "./body_components/Body";
import Footer from "./foot_components/Footer";

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
          <Body />
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
