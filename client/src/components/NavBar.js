import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class NavBar extends Component {
  render() {
    return (
      <div className="ui two item menu">
        <a className="active item">Styles</a>
        <a className="item">Favorites</a>
      </div>
    );
  }
}

export default NavBar;
