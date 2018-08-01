import React, { Component } from "react";
import "./App.css";
import Label from "../header/Header";
import ImagesContainer from "../ImagesContainer";
import LoginForm from "../Login";
import TopBar from "../TopBar";
import NavBar from "../NavBar";
import Favorites from "../Favorites";
import FooterBar from "../Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: 1,
      showLoginForm: false
    };
  }
  render() {
    const { showLoginForm } = this.state;
    return (
      <div className={"app-layout"}>
        <div className="container">
          <TopBar
            showLoginForm={() => {
              this.setState({
                showLoginForm: true
              });
            }}
          />

          {showLoginForm ? (
            <LoginForm
              onClose={() => {
                this.setState({
                  showLoginForm: false
                });
              }}
            />
          ) : null}
          <Label />
          <NavBar />
          <ImagesContainer />
          <Favorites />
        </div>
        <div>
          <FooterBar />
        </div>
      </div>
    );
  }
}
//create a post requests that updates fav db When i click itll take the id of item and id of user and post to a route that creates anew favorite.
export default App;
// image container, will pss down state to modal image
