import React from "react";

import globalTheme from "../customTheme";
import { Container, Box, ThemeProvider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./Navbar";
import Showcase from "./Showcase";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "inherit",
    [theme.breakpoints.up("sm")]: {
      height: 240,
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={globalTheme}>
      <Box bgcolor="primary.main" className={classes.root}>
        <Container maxWidth="lg">
          <Navbar />
          <Showcase />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
