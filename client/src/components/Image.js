import React, { Component } from "react";

class Image extends Component {
  render() {
    const { url, id } = this.props.image;
    return (
      <div
        style={{
          float: "left",
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "260px",
          height: "400px",
          border: "1px solid #CCC",
          margin: "1em"
        }}
        onClick={() => this.props.showItems(id)}
      />
    );
  }
}
export default Image;
//Get the id of what was clicked.Get modal up showing list of items.
//Feed to the modal llooik at the state and find the particular image inside the images that has that id and pass it into modal. If there is id of current image then show modal and if i close modal, then clear current image.

//When we
