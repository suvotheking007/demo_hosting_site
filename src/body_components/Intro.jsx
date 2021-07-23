import React from "react";

import Typed from "react-typed";
import GoogleFontLoader from "react-google-font-loader";
import { Typography, createTheme, ThemeProvider, Box } from "@material-ui/core";

const introTheme = createTheme({
  typography: {
    fontFamily: ["Courgette", "cursive"].join(","),
  },
});

function Intro() {
  return (
    <ThemeProvider theme={introTheme}>
      <GoogleFontLoader
        fonts={[
          {
            font: "Courgette",
            weights: [400, "400i"],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />

      <Box height={100} marginTop={10}>
        <Typography
          variant="h3"
          style={{ marginTop: 30, maxWidth: 600 }}
          align="center"
        >
          <Typed
            strings={[
              "Are you eager to start a startup ? ",
              "Or just looking to take your business online ? ",
              "We got you cover in every respect",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default Intro;
