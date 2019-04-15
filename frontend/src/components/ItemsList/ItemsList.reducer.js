import { ITEMS_FETCHED } from './ItemsList.actions'

function itemsListReducer(state = [], action) {

    switch (action.type) {
        case ITEMS_FETCHED:
            return action.items;
        default:
            return state;
    }
}

export default itemsListReducer;
