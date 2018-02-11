import "whatwg-fetch"
import Auth from "../utils/Auth"
let UserAPI = {

    login(username, password){
        const requestOptions = {
            method: 'POST',
            headers: {'Authorization': 'Basic ' + btoa('livechat-api-client:livechat'), 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' },
            body: `username=${username}&password=${password}&grant_type=password`
        };
        return fetch('http://localhost/cronos/oauth/token', requestOptions)
            .then(response => {
                if (!response.ok) {
                    return Promise.reject(response.statusText);
                }
                return response.json();
            })
            .then(user => {
                // login successful if there's a jwt token in the response
                if (user && user["access_token"]) {
                    // store User details and jwt token in local storage to keep User logged in between page refreshes
                    Auth.setSession(user);
                }
                return user;
            });
    }
}

export default UserAPI;