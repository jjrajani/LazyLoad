import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./style.scss";

document.addEventListener("DOMContentLoaded", function() {
  const wrapper = document.getElementById("root");

  wrapper ? ReactDOM.render(<App />, wrapper) : false;
});
