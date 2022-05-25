import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "Redux/store";
import {MultipleContext} from "Context/MultipleProvider";
// Call make Server
makeServer();

const root=ReactDOM.createRoot(  document.getElementById("root"))
root.render(
  <React.StrictMode>
    <MultipleContext>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </MultipleContext>
  </React.StrictMode>
);
