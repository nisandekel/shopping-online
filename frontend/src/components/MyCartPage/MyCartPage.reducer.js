import { ADD_ITEM, DELETE_ITEM } from './MyCartPage.actions';
import { SIGNED_OUT} from './../Header/Header.actions';


function MyCartPageReducer(state = [], action) {

    let myItems = null;

    switch (action.type) {
        case ADD_ITEM:
            myItems = [...state];
            let isAlreadyExist = false;
            for (let item of myItems) {
                if (item._id === action.item._id) {
                    isAlreadyExist = true;
                    break;
                }
            }
            if (!isAlreadyExist) {
                myItems.push(action.item);
            }
            return myItems;
        case DELETE_ITEM:
            myItems = [...state];
            let itemIndex = -1;
            for (let i = 0; i < myItems.length; i++) {
                if (myItems[i]._id === action.itemID) {
                    itemIndex = i;
                }
            }
            myItems.splice(itemIndex, 1);
            return myItems;
        case SIGNED_OUT:
            return [];
        default:
            return state;
    }
}

export default MyCartPageReducer;