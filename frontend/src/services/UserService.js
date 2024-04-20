import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/users";

export const updateUserProfile = (email, userInfo) =>
  axios.put(REST_API_BASE_URL + "/" + email, userInfo);
