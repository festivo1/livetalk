import "whatwg-fetch"
import {Auth} from "utils"
let MessageAPI = {

    fetchMessage(creator, recipient) {
        const header = Auth.fetchToken();
        header["Content-Type"] ="application/x-www-form-urlencoded; charset=utf-8";
        const requestOptions = {
            method: 'POST',
            headers: header,
            body: `creator=${creator}&recipient=${recipient}`
        }
        return fetch('http://localhost/janus/api/chat/messages', requestOptions)
            .then(response => {
                if (!response.ok) {
                    return Promise.reject(response.statusText);
                }
                return response.json();
            })
            .then(response => {
                return response;
            });
    },

    sendMessage(message){
        const requestOptions = {
            method: 'POST',
            headers: Auth.fetchToken(),
            body: JSON.stringify(message)
        }
        return fetch('http://localhost/janus/api/chat/send-message', requestOptions)
            .then(response => {
                if (!response.ok) {
                    return Promise.reject(response.statusText);
                }
                return response.json();
            })
            .then(response => {
                return response;
            });
    }
}

export default MessageAPI;