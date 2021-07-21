import React from "react";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Navbar from "./Navbar";
import Navbar2 from "./Navbar_2";

const useStyles = makeStyles({
  root: {
    background: "#047aed",
    height: "100%",
  },
});

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Navbar2 />
        <Navbar />
        {/* Showcase */}
      </Container>
    </div>
  );
}

export default Header;