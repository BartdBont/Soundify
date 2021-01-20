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

    deletePlaylist(id) {
        return instance.delete(`playlists/${id}`)
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

    addSongToPlaylist(song, playlistId) {
        return instance.post(`playlists/${playlistId}/songs`, song)
        .then(response => {
            return response.data;
        })
    }

    removeSongFromPlaylist(song, playlistId) {
        return instance.delete(`playlists/${playlistId}/songs/${song.id}`)
        .then(response => {
            return response.data;
        })
    }

    getRecentAlbums() {
        return instance.get("albums/recent")
        .then(response => {
            return response.data;
        })
    }

    getAlbum(id) {
        return instance.get(`albums/${id}`)
        .then(response => {
            return response.data;
        })
    }

    getAlbumSongs(id) {
        return instance.get(`albums/${id}/songs`)
        .then(response => {
            console.log(response.data)
            return response.data;
        })
    }
}

export default new PlaylistService();
