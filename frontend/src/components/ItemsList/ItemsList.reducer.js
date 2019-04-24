import { ITEMS_FETCHED, FILTER_LIST, SORT_LIST } from './ItemsList.actions'
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
        case SORT_LIST:
            const sortedList = [...state];
            const compareFunc = action.sortBy === "name" ? compareName : comparePrice;
            return sortedList.sort(compareFunc);
        case SIGNED_OUT:
            return [];
        default:
            return state;
    }
}

function compareName(i1, i2) {
    if (i1.name > i2.name) {
        return 1;
    }
    else if (i1.name < i2.name) {
        return -1;
    }
    else {
        return 0;
    }
}

function comparePrice(i1, i2) {
    if (parseInt(i1.price) > parseInt(i2.price)) {
        return 1;
    }
    else if (parseInt(i1.price) < parseInt(i2.price)) {
        return -1;
    }
    else {
        return 0;
    }
}


export default itemsListReducer;
