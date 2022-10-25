import React from "react";
import ReactDOM from "react-dom/client";
import "./Style.css";
import App from "./App";
import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="mainContainer">
    <Header />
    <App />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
