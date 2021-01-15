import axios from "axios";

const apiUrl = "http://localhost:8080/spotify/v1/";
const token = JSON.parse(localStorage.getItem("user"));
const instance = axios.create({
    baseURL: apiUrl,
    headers: { Authorization: "Bearer " + token },
});

class SearchService {
    getSearchResult(searchTerm) {
        return instance.get(`songs?name=${searchTerm}`)
        .then(response => {
            console.log(response.data)
            return response.data;
        });
    }
}

export default new SearchService();
