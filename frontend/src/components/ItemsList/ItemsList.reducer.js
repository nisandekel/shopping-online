import { ITEMS_FETCHED, FILTER_LIST } from './ItemsList.actions'
import { SIGNED_OUT } from './../Header/Header.actions';

let allItemsList = [];
function itemsListReducer(state = [], action) {

    switch (action.type) {
        case ITEMS_FETCHED:
            allItemsList = [...action.items];
            return action.items;
        case FILTER_LIST:
            return allItemsList.filter(item => {
                return item.name.toUpperCase().includes(action.searchValue.toUpperCase())
            });
        case SIGNED_OUT:
            return [];
        default:
            return state;
    }
}

export default itemsListReducer;
