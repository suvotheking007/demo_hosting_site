import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import DemoForm from "./DemoForm";
import ShowcaseAccordion from "./ShowcaseAccordion";

const useStyles = makeStyles({
  showcaseText: {
    color: "white",
    fontWeight: "normal",
    marginTop: 20,
    paddingBottom: 20,
  },
});

function Showcase() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      alignItems="flex-start"
      className={classes.root}
    >
      <Grid item container xs={12} sm={6}>
        <Typography
          variant="h2"
          component="h1"
          className={classes.showcaseText}
        >
          Easier deployment
        </Typography>
        <ShowcaseAccordion />
      </Grid>
      <Grid item container xs={12} sm={6}>
        <DemoForm />
      </Grid>
    </Grid>
  );
}

export default Showcase;
