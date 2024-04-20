import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/auth";

export const registerAPICall = (registerObj) =>
  axios.post(AUTH_REST_API_BASE_URL + "/register", registerObj);

export const loginAPICall = (email, password) =>
  axios.post(AUTH_REST_API_BASE_URL + "/login", { email, password });

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");

export const saveLoggedInUser = (email, role) => {
  sessionStorage.setItem("authenticatedUser", email);
  sessionStorage.setItem("role", role);
};

export const isUserLoggedIn = () => {
  const username = sessionStorage.getItem("authenticatedUser");

  if (username == null) {
    return false;
  } else {
    return true;
  }
};
export const getUserInfo = async (token) => {
  try {
    const response = await axios.get(`${AUTH_REST_API_BASE_URL}/users/${token}`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch user information");
  }
};
export const getLoggedInUser = () => {
  const username = sessionStorage.getItem("authenticatedUser");
  return username;
};

export const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
};

export const isAdminUser = async () => {
  try {
    const user = await getUserInfo(getToken());
    const role = user.roles[0].name;

    return role === "ADMIN";
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
};
