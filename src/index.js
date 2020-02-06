import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/home/index.jsx";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BodyContainer } from "../src/utils/styledComponent";
ReactDOM.render(
  <Provider store={store}>
    <BodyContainer>
      <Home />
    </BodyContainer>
  </Provider>,
  document.getElementById("app")
);
