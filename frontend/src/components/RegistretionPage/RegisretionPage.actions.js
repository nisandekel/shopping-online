
import { route } from "./../../server/serverUrl";
import { showBanner, unshowBanner } from './../Banner/Banner.actions';


export const uploadRegistretionDetails = (details) => {
    return function (dispatch) {
        fetch(route("users/registretion"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details)
        }).then(res => {
            dispatch(showBanner("registretion completed", "success"));
            setTimeout(() => dispatch(unshowBanner()), 3000);
        }).catch(err => {
            showBanner("registretion failed", "warning");
            setTimeout(unshowBanner, 3000);
        })
    }
}