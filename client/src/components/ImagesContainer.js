import React, { Component } from "react";
import Image from "./Image";
import MogulModal from "./MogulModal";
import Fade from "react-reveal/Fade";

class ImagesContainer extends Component {
  state = {
    loading: true,
    images: [],
    currentImage: null,
    currentItem: null
  };

  updateLike = (imageId, itemId) => {
    const newImages = [...this.state.images].map(image => {
      if (image.id === imageId) {
        const newImage = { ...image };
        newImage.items = image.items.map(item => {
          return item.id === itemId ? { ...item, liked: !item.liked } : item;
        });
        return newImage;
      } else {
        return image;
      }
    });
    this.setState({ images: newImages });
  };
  showItems = (id, itemId) => {
    this.setState({ currentImage: id, currentItem: itemId });
    console.log("You clicked me");
  };
  displayItem = id => {
    this.setState({ currentItem: id });
  };
  closeModal = () => {
    this.setState({ currentImage: null });
  };
  componentWillMount = async () => {
    const response = await fetch("/api/images");
    const json = await response.json();
    if (json.images) this.setState({ loading: false, images: json.images });
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
          <MogulModal
            currentImage={this.state.currentImage}
            displayItem={this.displayItem}
            currentItem={this.state.currentItem}
            image={image}
            closeModal={this.closeModal}
            updateLike={this.updateLike}
          />
          <Fade>{images}</Fade>
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
