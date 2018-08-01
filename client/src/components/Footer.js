import React, { Component } from "react";
// import { Footer } from "react-materialize";

class FooterBar extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%"
        }}
        className="ui inverted grey vertical footer segment"
      >
        <div className="ui center aligned container">
          <h4 className="ui inverted header">
            &copy; Copyright 2018 | All rights reserved | Kris Iniguez
          </h4>
          <a href="https://www.facebook.com/">
            <i className="facebook square icon big" />
          </a>
          <a href="https://twitter.com/">
            <i className="twitter square icon big" />
          </a>
          <a href="https://www.linkedin.com/company/c">
            <i className="linkedin square icon big" />
          </a>
        </div>
      </div>
    );
  }
}

export default FooterBar;
