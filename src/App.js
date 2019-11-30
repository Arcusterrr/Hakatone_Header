import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { Switch, Route, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Redirect component={<Header />} />
        </Switch>
      </div>
    );
  }
}

export default App;
