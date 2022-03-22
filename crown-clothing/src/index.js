import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./redux/store";
// import { applyMiddleware, compose } from "redux";
// import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* <PersistGate persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Router>
  </Provider>,
  document.getElementById("root")
);
