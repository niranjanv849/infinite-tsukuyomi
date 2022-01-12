import React from "react";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Widgets from "./Widgets.js";
import "./App.css";
import Signin from "./Signin.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Sidebar />
            <Feed />
            <Widgets />
          </Route>

          <Route path="/login">
            <Signin/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
