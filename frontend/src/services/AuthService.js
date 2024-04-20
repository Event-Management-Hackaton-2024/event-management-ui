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

export const getLoggedInUser = () => {
  const username = sessionStorage.getItem("authenticatedUser");
  return username;
};

export const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
};

export const isAdminUser = () => {
  let role = sessionStorage.getItem("role");

  if (role != null && role === "ROLE_ADMIN") {
    return true;
  } else {
    return false;
  }
};
