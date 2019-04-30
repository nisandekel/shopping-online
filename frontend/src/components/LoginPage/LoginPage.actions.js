import { route } from './../../server/serverUrl';
import {showBanner, unshowBanner} from './../Banner/Banner.actions';

export const LOGGED_IN = "LOGGED_IN";

export const loggedIn = (userName)=>{
    return {type:LOGGED_IN, userName};
}

export const checkAuthorization = (details) => {

    return function (dispatch) {

        const auth = `Basic ${btoa(`${details.userName}:${details.password}`)}`;

        fetch(route('users/login'), {
            method: "POST",
            headers: new Headers({
                Authorization: auth
            })
        })
            .then(res => res.json())
            .then(res => {
                if (res.autorized === "autorized") {
                    dispatch(loggedIn(details.userName));
                }
            })
            .catch(err => {
                dispatch(showBanner("one or more fields is incorrect", "warning"));
                setTimeout(()=>dispatch(unshowBanner()),3000);
            })
    }
}