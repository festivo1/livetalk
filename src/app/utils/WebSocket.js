
import {Stomp} from "stompjs/lib/stomp"
import SockJS from "sockjs-client"
const socket = new SockJS('http://localhost/janus/messaging');
const stompClient = Stomp.over(socket);

let subscribe = {
    register(clients)  {
        stompClient.connect({}, function(frame) {
            clients.map((register) => {
                stompClient.subscribe(register.route, register.callback);
            })
        });
    }
}

export default subscribe;