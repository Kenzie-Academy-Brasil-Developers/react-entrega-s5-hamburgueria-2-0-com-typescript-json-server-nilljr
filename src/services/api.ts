import axios from "axios";

const api = axios.create({
  baseURL: "https://json-server-burgershop-base.herokuapp.com/",
});

export default api;
