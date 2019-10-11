import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import "./index.css";

import reducer from './reducers'

// import App from "./components/App";
import SmurfList from './components/SmurfList'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <SmurfList />
    </Provider>
    , document.getElementById("root"));
