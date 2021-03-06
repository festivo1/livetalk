
import {Stomp} from "stompjs/lib/stomp"
import SockJS from "sockjs-client"
import {Auth} from "utils"

let subscribe = {
    register(clients)  {
        const socket = new SockJS('http://localhost/janus/messaging');
        const stompClient = Stomp.over(socket);
        stompClient.connect(Auth.fetchToken(), function(frame) {
            clients.map((register) => {
                stompClient.subscribe(register.route, register.callback,Auth.fetchToken());
            })
            stompClient.send("/app/messaging", Auth.fetchToken());
        });
    }
}

export default subscribe;