import { route } from './../../server/serverUrl';

export const ITEMS_FETCHED = "ITEMS_FETCHED";
export const FILTER_LIST = "FILTER_LIST";
export const SORT_LIST = "SORT_LIST";

export const sortList = (sortBy) => {
    return { type: SORT_LIST, sortBy };
}

export const itemsFetched = (items) => {
    return { type: ITEMS_FETCHED, items }
}

export function fetchItems() {
    return function (dispatch) {
        fetch(route('items'))
            .then(res => res.json())
            .then(res => dispatch(itemsFetched(res)))
            .catch(err => console.log(err));
    }
}

export const filterList = (searchValue) => {
    return { type: FILTER_LIST, searchValue };
}
