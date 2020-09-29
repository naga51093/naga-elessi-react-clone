import React from "react";
import { Route, Switch } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";

// Utils
import "./sass/App.scss";

// App pages
import HomePage from "./components/HomePage";
import TestPage from "./components/TestPage";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" component={TestPage} />
      </Switch>
    </div>
  );
}

export default App;
