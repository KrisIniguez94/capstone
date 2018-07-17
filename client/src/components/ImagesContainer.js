import React, { Component } from "react";
import Image from "./Image";
import MogulModal from "./MogulModal";

class ImagesContainer extends Component {
  state = {
    loading: true,
    images: [],
    currentImage: null
  };
  showItems = id => {
    this.setState({ currentImage: id });
    console.log("You clicked me");
  };

  componentWillMount = async () => {
    const response = await fetch("/api/images");
    const json = await response.json();
    if (json.images) this.setState({ loading: false, images: json.images });
  };

  closeModal = () => {
    this.setState({ currentImage: null });
  };

  render() {
    const images = this.state.images.map(image => {
      return <Image showItems={this.showItems} key={image.id} image={image} />;
    });

    if (this.state.loading) {
      return null;
    } else {
      const image = this.state.images.find(
        i => i.id === this.state.currentImage
      );
      return (
        <div>
          <MogulModal image={image} closeModal={this.closeModal} />
          {images}
        </div>
      );
    }
  }
}

export default ImagesContainer;

// current images
// current id
// modal component

// Pass from the state comp to the modal comp with a div that simply diplays "the current image is" whatever is clicked.
