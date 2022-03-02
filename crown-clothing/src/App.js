import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import SigninAndSignup from "./pages/signin-and-signup/signin-and-signup";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userAction";

class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/signin" element={<SigninAndSignup />} />
          </Routes>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
