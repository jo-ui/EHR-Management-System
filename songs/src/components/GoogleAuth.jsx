import React, { Component } from "react";

class GoogleAuth extends Component {
  state = {
    isSignedIn: [],
  };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          ClientId:
            "476664490097-bhqlrdths9jbodcamcbik4g5pbl47m8q.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>i dont know</div>;
    } else if (this.state.isSignedIn) {
      return <div>i am signed in!</div>;
    } else {
      return <div>i am not signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
export default GoogleAuth;
