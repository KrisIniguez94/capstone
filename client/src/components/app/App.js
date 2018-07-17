import React, { Component } from "react";
import "./App.css";
import Header from "../header/Header";
import ImagesContainer from "../ImagesContainer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ImagesContainer />
      </div>
    );
  }
}

export default App;
// image container, will pss down state to modal image
