import React from "react";
import { Button } from "@material-ui/core";

const MaterialUI: React.FC = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        primary
      </Button>
      <Button variant="contained" color="secondary">
        secondary
      </Button>
      <Button variant="contained" color="default">
        default
      </Button>
      <Button variant="contained" color="inherit">
        inherit
      </Button>
    </div>
  );
};

export default MaterialUI;
