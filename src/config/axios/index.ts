import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;