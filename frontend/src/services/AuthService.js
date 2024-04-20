import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/auth";
const BASE_URL = "http://localhost:8080";

export const registerAPICall = (registerObj) =>
  axios.post(AUTH_REST_API_BASE_URL + "/register", registerObj);

export const loginAPICall = (email, password) =>
  axios.post(AUTH_REST_API_BASE_URL + "/login", { email, password });

export const storeToken = (token) => localStorage.setItem("token", token);
export const storeEmail = (email) => localStorage.setItem("email", email);
export const storeRole = (role) => localStorage.setItem("role", role);

export const getToken = () => localStorage.getItem("token");
export const getEmail = () => localStorage.getItem("email");

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
export const getUserInfo = async (token, email) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${email}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

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
    const user = await getUserInfo(getToken(), getEmail());
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
};
