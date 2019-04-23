import { IMG_CLICKED, X_BUTTON_CLICKED } from './ShoppingPage.actions';
import { SIGNED_OUT, SHOP_BUTTON_CLICKED } from './../Header/Header.actions';
const initialState = { showImg: false, src: "" };
function shoppingPageReducer(state = initialState, action) {
    switch (action.type) {
        case IMG_CLICKED:
            return { showImg: true, src: action.srcImg };
        case X_BUTTON_CLICKED:
            return initialState;
        case SHOP_BUTTON_CLICKED:
            return initialState;   
        case SIGNED_OUT:
            return initialState;
        default:
            return state;
    }
}

export default shoppingPageReducer;