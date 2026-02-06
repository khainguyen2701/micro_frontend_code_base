import axios from "axios";

const API_URL = process.env.API_URL;

const config = {
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5 * 60 * 1000,
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
