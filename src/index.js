import "./index.css";
import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import store from "./State.js";

let RerenderAll = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        appState={state}
        AddMessage={store.AddMessage.bind(store)}
        AddPost={store.AddPost.bind(store)}
        ChangePostBuffer={store.ChangePostBuffer.bind(store)}
        ChangeMessageBuffer={store.ChangeMessageBuffer.bind(store)}
      />
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
