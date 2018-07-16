import React, { Component } from "react";
class Modal extends Component {
  render() {
    if (!this.props.image) {
      return null;
    } else {
      const items = this.props.image.items.map(item => {
        return <div key={item.id}>{item.name}</div>;
      });
      return <div>{items.length > 0 ? items : "Sorry :("}</div>;
    }
  }
}

export default Modal;

//start with box that list all your items
