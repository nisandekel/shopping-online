
import {route} from "./../../server/serverUrl"; 


export const uploadRegistretionDetails = (details)=>{
    return function(){
        fetch(route("users/registretion"),{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details)
        }).then(res=>console.log(res));
    }
}