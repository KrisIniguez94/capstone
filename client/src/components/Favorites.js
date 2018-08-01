import React, { Component } from "react";

class Favorites extends Component {
  state = {
    loading: true,
    favoriteItems: [],
    currentItemLink: null
  };

  affiliateLink = url => {
    this.setState({ currentItem: url });
    console.log("You clicked me");
  };
  componentWillMount = async () => {
    const response = await fetch("/api/items/favorites");
    const json = await response.json();
    if (json.items)
      this.setState({ loading: false, favoriteItems: json.items });
  };

  render() {
    const favoriteItems = this.state.favoriteItems.map(item => {
      return (
        <div onClick={this.affliateLink} key={item.id} item={item}>
          {item.descripton}
        </div>
      );
    });
    if (this.state.loading) {
      return null;
    } else {
      return <div>{favoriteItems}</div>;
    }
  }
}

export default Favorites;
