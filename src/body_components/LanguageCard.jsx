import React from "react";
import { makeStyles, Card, CardContent, CardMedia } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 150,
    minWidth: 150,
    borderRadius: 8,
  },
  media: {
    height: 140,
    width: "100%",
  },
});

function LanguageCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img src={props.image} className={classes.media} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LanguageCard;
