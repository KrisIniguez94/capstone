import React, { Component } from "react";

// passing props.image// inside of appjs in our books, its gonna make the data base call, and gonna have the state and have our imagest and also our current image. Each one of your image Components will have an onclick. We awill have a function that does set current image and that will be updated inside images container.
// pass images and pass that onto image Component.
class ImagesContainer extends Component {
  state = {
    images: [],

    currentImage: null
  };
  render() {
    const images = this.state.images.map(image => {
      return <Image key={image.id} image={image} />;
    });
  }
}
