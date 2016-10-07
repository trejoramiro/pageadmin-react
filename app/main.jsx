import React from "react";
import ReactDOM from "react-dom";
import Page from "./page";
import PageAdmin from "./pageAdmin";
import Backend from "./backend";

ReactDOM.render(
  <Page content="Welcome to my site!" />,
  document.querySelector(".react")
);

var backend = new Backend();
ReactDOM.render(
  <PageAdmin backend={backend} />,
  document.querySelector(".react")

);
