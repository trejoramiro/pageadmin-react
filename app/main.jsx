import React from "react";
import ReactDOM from "react-dom";
import Page from "./page";
import PageAdmin from "./pageAdmin.jsx";
import Backend from "./backend";


var backend = new Backend();
ReactDOM.render(
  <PageAdmin backend={backend} />,
  document.querySelector(".react")

);
