import itemsListReducer from './../components/ItemsList/ItemsList.reducer';
import loginPageReducer from './../components/LoginPage/LoginPage.reducer';
import shoppingPageReducer from './../components/ShoppingPage/SoppingPage.reducer';
import MyCartPageReducer from './../components/MyCartPage/MyCartPage.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    itemsList: itemsListReducer,
    currentUser: loginPageReducer,
    displayImg: shoppingPageReducer,
    myItemsList: MyCartPageReducer
})

export default rootReducer;
