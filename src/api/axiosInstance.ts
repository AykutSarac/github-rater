import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://api.github.com/users",
    method: "GET",
    responseType: "json"
});

export default axiosInstance;