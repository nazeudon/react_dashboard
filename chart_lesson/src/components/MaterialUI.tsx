import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "3px 50px",
  },
  typoStyle: {
    color: "Blue",
  },
});

const MaterialUI: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={classes.typoStyle}
        align="left"
        variant="h1"
        color="secondary"
        gutterBottom
      >
        Hello UI
      </Typography>
      <Button className={classes.btnStyle} variant="contained" color="primary">
        primary-contained
      </Button>
      <Button variant="outlined" color="secondary">
        secondary-outlined
      </Button>
      <Button variant="text" color="inherit">
        inherit-text
      </Button>
    </div>
  );
};

export default MaterialUI;
