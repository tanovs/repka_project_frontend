import axios from "axios";

const api = axios.create({
  baseURL: "http://repka_backend:8080/api/v1",
  // transformResponse: (data) => data.data,
});

export { api };
