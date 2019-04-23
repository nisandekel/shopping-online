

export const IMG_CLICKED = "IMG_CLICKED";

export const imgClicked = (srcImg)=>{
    return {type:IMG_CLICKED, srcImg}
}

export const X_BUTTON_CLICKED = "X_BUTTON_CLICKED";

export const xButtonClicked = ()=>{
    return {type:X_BUTTON_CLICKED}
}