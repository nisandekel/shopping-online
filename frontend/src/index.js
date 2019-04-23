import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import App from './App';
import {SIGNED_OUT} from './components/Header/Header.actions';
import * as serviceWorker from './serviceWorker';


const appTitle = "Shopping Online";
//middle ware for saving state in local storage
const storageSaver = store => next => action => {
    next(action);
    if(action.type===SIGNED_OUT){
        localStorage.clear();
    }else{
        localStorage.setItem("app_data", JSON.stringify(store.getState()));
    }
    return;
}

function readLocalStorage() {
    return JSON.parse(localStorage.getItem("app_data")) || { itemsList: [], displayImg: { showImg: false, src: "" }, myItemsList: [] };
}

// const initialState =  readLocalStorage();
const middlewares = applyMiddleware(thunk, storageSaver);
const store = createStore(rootReducer, readLocalStorage(), middlewares);
ReactDOM.render(
    <Provider store={store}>
        <App title={appTitle} />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
