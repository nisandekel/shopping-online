import { route } from './../../server/serverUrl';

export const LOGGED_IN = "LOGGED_IN";

export const loggedIn = ()=>{
    return {type:LOGGED_IN};
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
                    dispatch(loggedIn());
                }
            })
            .catch(err => console.log(err))
    }
}