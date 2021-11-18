import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/users',
  method: 'GET',
  responseType: 'json',
});

export default axiosInstance;
