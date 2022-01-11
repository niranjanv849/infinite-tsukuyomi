import React from "react";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Widgets from "./Widgets.js";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
