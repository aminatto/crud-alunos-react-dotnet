import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:44339",
});

export default api;
