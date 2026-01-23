import axios from "axios";
const api = import.meta.env.VITE_API_URL;
// const api_local= import.meta.env.VITE_LOCAL_URL;


const axiosInstance = axios.create({
  baseURL: `${api_local}/api`,
});

export default axiosInstance;
