import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {},
};

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props();
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>REACTCOLORS</h1>
          </nav>
        </div>

        {palettes.map((palette) => (
          <MiniPalette {...palette} />
        ))}
      </div>
    );
  }
}
export default withStyles(styles)(PaletteList);
