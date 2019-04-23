
export const ADD_ITEM="ADD_ITEM";
export const DELETE_ITEM="DELETE_ITEM";
export const IMG_CLICKED_MY_CART="IMG_CLICKED_MY_CART";
export const X_BUTTON_CLICKED_MY_CART="X_BUTTON_CLICKED_MY_CART";


export const addItem = (item)=>{
    return {type:ADD_ITEM,  item}
}

export const deleteItem = (itemID)=>{
    return {type:DELETE_ITEM,  itemID}
}

export const imgClickedMyCart = (srcImg)=>{
    return {type:IMG_CLICKED_MY_CART, srcImg}
}

export const X_BUTTON_CLICKED = "X_BUTTON_CLICKED";

export const xButtonClickedMyCart = ()=>{
    return {type:X_BUTTON_CLICKED_MY_CART}
}