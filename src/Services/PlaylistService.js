import axios from "axios";

const apiUrl = "http://localhost:8080/spotify/v1/";
const token = JSON.parse(localStorage.getItem("user"));
const instance = axios.create({
    baseURL: apiUrl,
    headers: { Authorization: "Bearer " + token },
});

class PlaylistService {
    createPlaylist(playlist) {
        return instance.post("playlists", playlist)
        .then(response => {
            return response.data;
        })
    }

    getPlaylists() {
        return instance.get("playlists")
        .then(response => {
            console.log(response.data)
            return response.data;
        })
    }

    getPlaylist(id) {
        return instance.get(`playlists/${id}`)
        .then(response => {
            return response.data;
        })
    }

    addSongToPlaylist(song, playlistId) {
        console.log(playlistId);
        return instance.post(`playlists/${playlistId}/songs`, song)
        .then(response => {
            return response.data;
        })
    }

}

export default new PlaylistService();
