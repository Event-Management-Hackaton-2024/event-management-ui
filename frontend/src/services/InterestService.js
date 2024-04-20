import axios from "axios";
const REST_API_BASE_URL = "http://localhost:8080/interests";

export const addInterest = (interest) => axios.post(REST_API_BASE_URL, interest);
export const getAllInterests = () => axios.get(REST_API_BASE_URL);
