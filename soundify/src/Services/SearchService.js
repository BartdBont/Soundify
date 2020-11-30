import axios from "axios";

const apiUrl = "http://localhost:8080/spotify/v1/";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjA2NTE4Mzk2LCJpYXQiOjE2MDY0ODIzOTZ9.d8kKQQh61BeH3gjilVIPOkfpuZ5ThgW0GgF2eVb11CI";
const instance = axios.create({
    baseURL: apiUrl,
    headers: { Authorization: "Bearer " + token },
});

class SearchService {
    getSearchResult(searchTerm) {
        return instance.get(`songs?name=${searchTerm}`)
        .then(response => {
            return response.data;
        });
    }
}

export default new SearchService();
