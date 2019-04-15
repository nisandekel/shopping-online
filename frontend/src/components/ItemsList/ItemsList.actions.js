import {route} from './../../server/serverUrl';

export const ITEMS_FETCHED = "ITEMS_FETCHED";

export const itemsFetched = (items)=>{
    return {type:ITEMS_FETCHED, items}
}

export function fetchItems(){
    return function(dispatch){
        fetch(route('items'))
            .then(res=>res.json())
            .then(res=>dispatch(itemsFetched(res)))
            .catch(err=>console.log(err));
    }
}
