import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend-mern-8diy.onrender.com/api",
});

export default axiosInstance;
