import axios from "axios";

const apiUrl = "http://localhost:8080/spotify/v1/";
const instance = axios.create({
    baseURL: apiUrl
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
            return response.data;
        })
    }
}

export default new PlaylistService();
