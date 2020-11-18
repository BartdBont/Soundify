import axios from "axios";

const apiUrl = "http://localhost:8080/spotify/v1/";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjA1NzQyNDMxLCJpYXQiOjE2MDU3MDY0MzF9.t_X5TZHasXjm71GOCTmM514V3766xjMp6WSi8dDoiWU";
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
