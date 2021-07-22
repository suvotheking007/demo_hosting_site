import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import globalTheme from "../customTheme";

import ShowcaseAccordionTab from "./ShowcaseAccordionTab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90vw",
    [theme.breakpoints.up("sm")]: {
      width: 450,
    },
    backgroundColor: `${globalTheme.palette.primary.main}`,
    // boxShadow: "none",
  },
}));

export default function Showcase() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      className={classes.root}
      elevation={0}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ fill: "white" }} />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        className={classes.root}
      >
        <Typography variant="h5" content="h3">
          Cross Platform Cli
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <ShowcaseAccordionTab />
      </AccordionDetails>
    </Accordion>
  );
}
