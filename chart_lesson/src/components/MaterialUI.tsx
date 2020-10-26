import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btnStyle: {
    background: "green",
    padding: "3px 50px",
  },
});

const MaterialUI: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
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
