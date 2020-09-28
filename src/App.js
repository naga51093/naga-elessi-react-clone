import React from "react";
import { Route, Switch } from "react-router-dom";
// Utils
import "./App.css";

// App pages
import HomePage from "./components/HomePage";
import TestPage from "./components/TestPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/test" component={TestPage} />
      </Switch>
    </div>
  );
}

export default App;
