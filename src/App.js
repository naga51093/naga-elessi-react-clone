import React from "react";
// Utils
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import AppNavbar from "./components/AppNavbar";

// Utils
import "./sass/App.scss";

// App pages
import HomePage from "./components/HomePage";
import TestPage from "./components/TestPage";
import ScrollNavbar from "./components/ScrollNavbar";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <ScrollNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" component={TestPage} />
      </Switch>
    </div>
  );
}

export default App;
