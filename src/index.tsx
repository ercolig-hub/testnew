import ReactDOM from "react-dom";

import { createStore, applyMiddleware, Store } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { App } from "./App";
import { store } from "./store";

import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import React from "react";
import About from "./components/About";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/:id" children={<About />} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
