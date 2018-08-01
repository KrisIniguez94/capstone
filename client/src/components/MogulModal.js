import React, { Component } from "react";
import { Header, Image, Modal } from "semantic-ui-react";
import axios from "axios";

class MogulModal extends Component {
  likeImage = id => {
    console.log("hey you clicked: ", id);
    axios.post(`/api/items/favorites/${id}`, {}).then(result => {
      this.props.updateLike(this.props.image.id, id);
      console.log(result.data);
    });
  };

  unlikeImage = id => {
    axios.delete(`/api/items/favorites/${id}`, {}).then(result => {
      this.props.updateLike(this.props.image.id, id);
    });
  };

  render() {
    if (!this.props.image) {
      return null;
    } else {
      const items = this.props.image.items.map(item => {
        return (
          <div key={item.id}>
            <Image
              onClick={() => this.props.displayItem(item.id)}
              wrapped
              size="small"
              src={item.url}
            />
          </div>
        );
      });
      const item = this.props.image.items.find(
        i => i.id === this.props.currentItem
      );
      let thumbnailPicker;
      if (this.props.image.items) {
        thumbnailPicker = (
          <div
            style={{
              width: "100px"
            }}
          >
            {items}
          </div>
        );
      }
      return (
        <Modal centered={false} open={true} onClose={this.props.closeModal}>
          <Modal.Header>{this.props.image.name}</Modal.Header>
          <Modal.Content image>
            {thumbnailPicker}
            <Image wrapped size="large" src={item ? item.url : null} />
            <div>
              <Header>{item ? item.name : "Nah Chill Fam"}</Header>
              {item && item.liked ? (
                <span onClick={() => this.unlikeImage(item.id)}>Unlike</span>
              ) : (
                <span onClick={() => this.likeImage(item.id)}>Like</span>
              )}
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
//get a response back from server and update state
//delete record in db when u unlike, look at post for ref.
//
