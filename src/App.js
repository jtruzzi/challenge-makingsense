import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";

const history = require("history").createBrowserHistory;

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Route
          path={`${process.env.REACT_APP_BASE_PATH}/:characterId?`}
          component={Home}
        />
      </BrowserRouter>
    );
  }
}
export default App;
