import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
import Main from "./components/Main/index";
import Edit from "./components/Edit/index";
import Create from "./components/Create/index";
import Show from "./components/Show/index";
import Login from "./components/Login/index";
import Register from "./components/Register/index";
import stores from "./reducers";
import history from "./history";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// redux-thunk middleware
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
  stores,
  // redux devtools
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={Main} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/create" component={Create} />
        <Route path="/post/:id" component={Show} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
