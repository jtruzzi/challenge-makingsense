import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Home from "./components/Home";

const history = require("history").createBrowserHistory;
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/:characterId?" component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
