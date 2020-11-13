import axios from "axios";

const apiUrl = "http://localhost:8080/spotify/v1/";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjA1MzI3MTE3LCJpYXQiOjE2MDUyOTExMTd9.Rdq4Qyq8uEfjFm0Tld4wuoHBxg-dwgPOE5fUhdqGRhM";
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
            return response.data;
        })
    }

    getPlaylist(id) {
        return instance.get(`playlists/${id}`)
        .then(response => {
            return response.data;
        })
    }
}

export default new PlaylistService();
