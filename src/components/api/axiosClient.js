import axios from 'axios';
import Cookies from 'js-cookie';

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:9090/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});



// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
    // get token in local storage
    const accessToken = localStorage.getItem('accessToken');
    // set token to header
    config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});



export default axiosClient;
