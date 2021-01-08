import axios from "axios";

const apiUrl = "http://localhost:8080/spotify/v1/";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjA2ODY4MDA3LCJpYXQiOjE2MDY4MzIwMDd9.fWQj326lHBU7rwWRSIaGwupQ8BjHPmFxp6YBBcTNP44";
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
