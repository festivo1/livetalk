import "whatwg-fetch"
import {Auth} from "utils"
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
                return user;
            });
    },

    addUser(values){
        const requestOptions = {
            method: 'POST',
            headers: Auth.fetchToken(),
            body: JSON.stringify(values)
        }
        return fetch('http://localhost/janus/api/user', requestOptions)
            .then(response => {
                if (!response.ok) {
                    return Promise.reject(response.statusText);
                }
                return response;
            })
            .then(response => {
                return response;
            });
    }
}

export default UserAPI;