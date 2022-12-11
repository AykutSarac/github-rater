import axios, { AxiosInstance } from 'axios';
import { setupInterceptors } from './axiosInterceptors';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.github.com/users',
  method: 'GET',
  responseType: 'json',
});

setupInterceptors(axiosInstance);

export default axiosInstance;
