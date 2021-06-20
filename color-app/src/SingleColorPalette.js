import React, { Component } from "react";

class SingleColorPalette extends Component {
  constructor(props) {
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palettes.colors;
    for (let key in allColors) {
      shades = shades.concat(allColors[key].filter());
    }
    return shades;
  }
  render() {
    return <div></div>;
  }
}
export default SingleColorPalette;
