import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    marginLeft: 0,
    height: 350,
    marginTop: 20,
    borderRadius: 10,
    paddingTop: 20,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
    [theme.breakpoints.up("md")]: {
      marginLeft: 150,
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: 50,
    },
  },
  input: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
  },
}));

function DemoForm() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Request a demo
        </Typography>
        <TextField id="standard-basic" label="Name" className={classes.input} />
        <TextField
          id="standard-basic"
          label="Company name"
          className={classes.input}
        />
        <TextField
          id="standard-basic"
          label="Email"
          className={classes.input}
        />
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default DemoForm;
