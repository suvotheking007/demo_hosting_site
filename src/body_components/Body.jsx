import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

import Intro from "./Intro";
import Stats from "./Stats";
import LanguageCardHolder from "./LanguageCardHolder";

const useStyles = makeStyles((theme) => ({
  intro: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

function Body() {
  const classes = useStyles();

  return (
    <Box marginBottom={5}>
      <Box className={classes.intro}>
        <Intro />
      </Box>
      <Stats />
      <LanguageCardHolder />
    </Box>
  );
}

export default Body;
