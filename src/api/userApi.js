import axios from "axios";
import axiosClient from "./axiosClient";

const userApi = {
  register(data) {
    const url = "/register";
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = "/login";
    return axiosClient.post(url, data);
  },
  getAllUser() {
    const url = "/user/getUsers";
    return axiosClient.get(url);
  },
  getUserById(id) {
    const url = `/user/getUserById/${id}`;
    return axiosClient.get(url);
  },
  updateUser(data) {
    const url = `user/updateUser/${data.id}`;
    return axiosClient.put(url, data);
  },

  // check if the user exists
  getUserInGoogle(token) {
    const url = `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`;
    return axios.get(url);
  },

  loginWithGoogle(data) {
    const url = "/googleLogin";
    return axiosClient.post(url, data);
  },
};

export default userApi;
