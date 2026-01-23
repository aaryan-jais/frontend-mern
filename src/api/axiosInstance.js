import axios from "axios";
const api_URL = import.meta.env.VITE_API_URL;
// const api_local= import.meta.env.VITE_LOCAL_URL;


const axiosInstance = axios.create({
  baseURL: `${api_URL}/api`,
});

export default axiosInstance;
