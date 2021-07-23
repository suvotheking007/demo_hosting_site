import React from "react";

import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "transparent",
  },
  media: {
    height: 200,
  },
});

function StatsContent(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={0}>
      <Container align="center">
        <img src={props.image} alt={props.alt} className={classes.media} />
      </Container>

      <CardContent>
        <Typography gutterBottom variant="h4" component="h4" align="center">
          {props.heading}
        </Typography>
        <Typography
          variant="h5"
          color="textSecondary"
          component="p"
          align="center"
        >
          {props.body}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default StatsContent;
