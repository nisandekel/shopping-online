
export const SHOP_BUTTON_CLICKED="SHOP_BUTTON_CLICKED";
export const SIGNED_OUT="SIGNED_OUT";

export const shopButtonClicked = () => {
    return {type:SHOP_BUTTON_CLICKED};
}

export const signedOut = ()=>{
    return {type:SIGNED_OUT}
}