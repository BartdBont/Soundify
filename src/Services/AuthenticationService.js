import axios from "axios";

const API_URL = "http://localhost:8080/spotify/v1/user";

class AuthenticationService {
	async isAuthenticated() {
		var token = JSON.parse(localStorage.getItem("user"));
		if (token) {
			return axios.get(API_URL, {
                headers: {
                    'Authorization': 'Bearer ' + token.accessToken
                }
            }).then((response) => {
				if (response) {
					return true;
				}
				return false;
			});
		}

		return false;
	}

	authenticate(username, password) {
		return axios
			.post(`${API_URL}/authenticate`, {
				username,
				password,
			})
			.then((response) => {
				console.log(response.data.jwt)
				if (response.data.jwt) {
					localStorage.setItem("user", JSON.stringify(response.data.jwt));
				}
				return response.data;
			});
	}

	logout() {
		localStorage.removeItem("user");
	}

	register(username, password, email) {
		return axios.post(API_URL + "/register", {
			username,
			password,
			email,
		});
	}

	async getCurrentUser() {
        var jwt = JSON.parse(localStorage.getItem("user"));
        console.log(jwt)
		if (jwt) {
			return axios.get(API_URL, {
                headers: {
                    'Authorization': 'Bearer ' + jwt
                }
            }).then((response) => {
				console.log(response)
				if (response) {
					return response.data;
				} else {
					this.logout();
				}
			});
        }
	}
}

export default new AuthenticationService();
