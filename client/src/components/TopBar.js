import React, { Component } from "react";

class TopBar extends Component {
  render() {
    return (
      <div className="app-top-bar">
        <div className="app-top-bar-inner">
          <div className="app-top-bar-left">Left Content</div>
          <div className="app-top-bar-right">
            <div className="app-top-bar-right-inner">
              <div className="user-profile">
                <div className="user-profile-picture">
                  <img src="https://gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e" />
                </div>
              </div>
              <ul className="user-profile-menu">
                <li
                  onClick={() => {
                    if (this.props.showLoginForm) {
                      this.props.showLoginForm(true);
                    }
                  }}
                  className="user-signin-button"
                >
                  Sign In
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TopBar;
