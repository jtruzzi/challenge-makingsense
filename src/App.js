import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
const history = require("history").createBrowserHistory;

function App() {
  return (
    <Layout>
      <BrowserRouter history={history}>
        <Route path="/" exact component={Home} />
        <Route path="/:heroId" exact component={Home} />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
