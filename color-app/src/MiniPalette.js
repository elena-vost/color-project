import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid teal",
  },
};
function MiniPalette() {
  return (
    <div>
      <h1>Mini Palette</h1>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
