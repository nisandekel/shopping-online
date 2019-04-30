import { SHOW_BANNER, UNSHOW_BANNER } from './Banner.actions';

const initialState = { msg: "", show: false, color: "" };
function bannerReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_BANNER:
            return { msg: action.msg, show: true, color: action.color };
        case UNSHOW_BANNER:
            return { msg: "", show: false, color: "" };
        default:
            return state;
    }
}

export default bannerReducer;