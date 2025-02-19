import axios from 'axios';
const baseUrl = process.env.BASE_URL;
const axiosInstance = axios.create({
    baseURL: baseUrl,
});
export {axiosInstance}