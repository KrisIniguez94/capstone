import React, { Component } from "react";
import "./App.css";
import Header from "../header/Header";
import ImagesContainer from "../ImagesContainer";
import LoginForm from "../Login";
import TopBar from "../TopBar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoginForm: false
    };
  }
  render() {
    const { showLoginForm } = this.state;
    return (
      <div className={"app-layout"}>
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
        <Header />
        <ImagesContainer />
      </div>
    );
  }
}

export default App;
// image container, will pss down state to modal image
