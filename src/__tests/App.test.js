import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { Provider } from "react-redux";

import configureStore from "../store/configureStore";
const mockStore = configureStore();

it("renders App without crashing with store connected", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={mockStore}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
