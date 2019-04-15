import {LOGGED_IN} from './LoginPage.actions';

function loginPageReducer(state=false,action){
    switch(action.type){
        case LOGGED_IN:
            return true;
        default:
            return state;
    }
}

export default loginPageReducer;