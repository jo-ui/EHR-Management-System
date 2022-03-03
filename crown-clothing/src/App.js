import Homepage from "./pages/homepage/Homepage";
import { Navigate, Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import SigninAndSignup from "./pages/signin-and-signup/signin-and-signup";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userAction";
import { selectCurrentUser } from "./redux/user/userSelector";
import { createStructuredSelector } from "reselect";
import Checkout from "./pages/checkout/Checkout";

import "./App.css";

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
            <Route exact path="/checkout" element={<Checkout />} />
            <Route
              exact
              path="/signin"
              element={
                this.props.currentUser ? (
                  <Navigate to="/" />
                ) : (
                  <SigninAndSignup />
                )
              }
            />
          </Routes>
        </div>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
