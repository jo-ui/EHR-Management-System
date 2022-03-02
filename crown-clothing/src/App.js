import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import SigninAndSignup from "./pages/signin-and-signup/signin-and-signup";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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

export default App;
