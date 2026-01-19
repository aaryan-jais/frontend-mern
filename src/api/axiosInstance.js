import axios from "axios";
const api = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: `${api}/api`,
});

export default axiosInstance;
