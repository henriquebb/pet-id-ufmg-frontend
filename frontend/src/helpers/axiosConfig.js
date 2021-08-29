import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
});
instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;