import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';
import * as serviceWorker from './serviceWorker';

const appTitle = "Shopping Cart";

const initialState = { itemsList: [], isLoggedIn: false };
const middlewares = applyMiddleware(thunk);
const store = createStore(rootReducer, initialState, middlewares);
ReactDOM.render(
    <Provider store={store}>
        <App title={appTitle} />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
