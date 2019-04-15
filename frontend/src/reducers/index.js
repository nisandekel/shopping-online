import itemsListReducer from './../components/ItemsList/ItemsList.reducer';
import loginPageReducer from './../components/LoginPage/LoginPage.reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    itemsList: itemsListReducer,
    isLoggedIn: loginPageReducer
})

export default rootReducer;
