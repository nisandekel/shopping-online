
export const SHOW_BANNER = "SHOW_BANNER";
export const UNSHOW_BANNER = "UNSHOW_BANNER";


export const showBanner = (msg, color) => {
    return { type: SHOW_BANNER, msg, color }
}

export const unshowBanner = () => {
    return { type: UNSHOW_BANNER }
}