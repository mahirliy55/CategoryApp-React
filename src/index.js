// * React Imports
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// * React Router Imports
import { BrowserRouter } from "react-router-dom";

// * App Imports
import App from "./App";

import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
