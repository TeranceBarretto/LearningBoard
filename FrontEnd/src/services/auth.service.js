import axios from "axios";

const API_URL = "http://localhost:8082/authenticate";

class AuthService {
  login(uname, pword) {
    return axios
      .post(API_URL, { username: uname, password: pword })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();