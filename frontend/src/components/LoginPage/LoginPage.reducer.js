import { LOGGED_IN } from './LoginPage.actions';
import { SIGNED_OUT } from './../Header/Header.actions';


const initialState = { userName: "", isLoggedIn: false };
function loginPageReducer(state = initialState, action) {
    switch (action.type) {
        case LOGGED_IN:
            return { userName: action.userName, isLoggedIn: true };
        case SIGNED_OUT:
            return { userName: "", isLoggedIn: false };
        default:
            return state;
    }
}

export default loginPageReducer;