import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
  },
};
function MiniPalette() {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors}></div>
      <h5 className={classes.title}></h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
