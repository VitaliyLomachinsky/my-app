import "./index.css";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import store from "./Redux/State.js";
import { BrowserRouter } from "react-router-dom";

let RerenderAll = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App appState={state} dispatch={store.dispatch.bind(store)} />
      </BrowserRouter>
      ;
    </React.StrictMode>,
    document.getElementById("root")
  );
};

RerenderAll(store.GetState());
store.subscribe(RerenderAll);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
