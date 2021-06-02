import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
}

export default App;
