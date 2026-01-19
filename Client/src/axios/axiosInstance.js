import axios from 'axios';

const Url = import.meta.env.VITE_BASE_URL;
console.log("Base URL:", Url);

const axiosInstance = axios.create({
    baseURL: Url, 
    withCredentials: true,
});

export default axiosInstance;