import React from "react";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import StatsContent from "./StatsContent";
import deployments from "../images/stats/deployments.svg";
import uploads from "../images/stats/uploads.svg";
import projects from "../images/stats/projects_completed.svg";

const useStyles = makeStyles({
  root: {
    marginTop: 100,
  },
});

function Stats() {
  const classes = useStyles();

  return (
    <Grid
      spacing={3}
      container
      justifyContent="center"
      className={classes.root}
      alignContent="center"
    >
      <Grid item xs={12} sm={6} md={3}>
        <StatsContent
          image={deployments}
          alt="deployment icon"
          heading="10,349,405"
          body="Deployments"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsContent
          image={uploads}
          alt="upload icon"
          heading="987 TB"
          body="Published"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatsContent
          image={projects}
          alt="project icon"
          heading="2,343,265"
          body="Projects"
        />
      </Grid>
    </Grid>
  );
}

export default Stats;
