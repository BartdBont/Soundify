import axios from "axios";

const apiUrl = "http://localhost:8080/spotify/v1/";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjA1NTYzNTcwLCJpYXQiOjE2MDU1Mjc1NzB9.AJ2Vi97ZSPApW17G5NYEBCZJh0t1cAplO4pkzguYd7M";
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
