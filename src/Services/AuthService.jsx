import axios from "axios";

//api for auth
const API_URL = "http://localhost:8080/api/auth";

class AuthService {
  login(username, password) {
    console.log('StartRequestAuth');  
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
}

export default new AuthService();