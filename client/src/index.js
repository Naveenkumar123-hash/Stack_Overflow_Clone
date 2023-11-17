import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import {compose, createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combineReducers from "./Redux/reducers/index"


const store=createStore(combineReducers,compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    </Provider>
);