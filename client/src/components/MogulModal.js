import React, { Component } from "react";
import { Button, Header, Image, Modal, Icon } from "semantic-ui-react";

class MogulModal extends Component {
  state = {
    currentItem: 0
  };

  render() {
    if (!this.props.image) {
      return null;
    } else {
      const items = this.props.image.items.map(item => {
        return (
          <div key={item.id}>
            <Image wrapped size="small" src={item.url} />
          </div>
        );
      });
      return (
        <Modal open={true} onClose={this.props.closeModal}>
          <Modal.Header>{this.props.image.name}</Modal.Header>
          <Modal.Content image>
            <div
              style={{
                width: "100px"
              }}
            >
              {items}
            </div>
            <div>
              <Header>
                {this.props.image.items[this.state.currentItem].name}
              </Header>
            </div>
          </Modal.Content>
        </Modal>
      );
    }
  }
}

export default MogulModal;

//start with box that list all your items
// {items.length > 0 ? items : "Sorry :("}
//Create an onclick to update the state;
