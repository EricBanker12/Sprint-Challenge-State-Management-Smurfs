import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css";

import reducer from './reducers'

// import App from "./components/App";
import SmurfList from './components/SmurfList'
import SmurfForm from "./components/SmurfForm";

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <SmurfForm />
        <SmurfList />
    </Provider>
    , document.getElementById("root"));
