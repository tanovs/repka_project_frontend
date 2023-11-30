import axios from "axios";

const api = axios.create({
  baseURL: "/api/v1",
  // transformResponse: (data) => data.data,
});

export { api };
