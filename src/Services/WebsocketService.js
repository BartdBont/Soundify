import SockJS from "sockjs-client";
import Stomp from "stompjs";

let stompClient;

const apiUrl = "http://localhost:8080/ws";

class WebSocket {

    connect() {
        const socket = new SockJS(apiUrl);
        console.log(socket)
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
        })
    }
    
    sendSomething() {
        stompClient.send("/app/hello", {})
    }

    createPlaylist(playlistName){
        const token = JSON.parse(localStorage.getItem("user"));
        stompClient.send(`/app/playlists/${token}/${playlistName}`, {})
    }

    // removeSong(playlistId, song){
    //     stompClient.send(`/app/${playlistId}/removesong`, {}, song)
    // }
}

export default new WebSocket();