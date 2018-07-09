import React, { Component } from "react";

class Image extends Component {
  render() {
    const { url } = this.props.image;
    return (
      <div>
        <img src={url} alt="Mogul Img" width="260" height="325" />
      </div>
    );
  }
}
export default Image;
