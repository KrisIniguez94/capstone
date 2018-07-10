import React, { Component } from "react";
import "./App.css";
import Image from "../img/Img";
import Header from "../header/Header";

class App extends Component {
  state = {
    loading: true,
    images: [],
    currentImage: null
  };

  componentWillMount = async () => {
    const response = await fetch("/api/images");
    const json = await response.json();
    if (json.images) this.setState({ loading: false, images: json.images });
  };

  render() {
    const images = this.state.images.map(image => {
      return <Image key={image.id} image={image} />;
    });
    return <div className="App">{!this.state.loading && images}</div>;
  }
}

export default App;
