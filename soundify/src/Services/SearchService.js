import axios from "axios";

const apiUrl = "http://localhost:8080/spotify/v1/";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjA1MzI3MTE3LCJpYXQiOjE2MDUyOTExMTd9.Rdq4Qyq8uEfjFm0Tld4wuoHBxg-dwgPOE5fUhdqGRhM";
const instance = axios.create({
    baseURL: apiUrl,
    headers: { Authorization: "Bearer " + token },
});

class SearchService {
    getSearchResult(searchTerm) {
        return instance.get(`songs?name=${searchTerm}`)
        .then(response => {
            console.log(response.data);
            return response.data;
        });
    }
}

export default new SearchService();
