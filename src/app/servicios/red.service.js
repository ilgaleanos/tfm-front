import axios from "axios";
import { StorageService } from './storage.service'


var storeService = new StorageService();

export const Axios = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_SERVER
});

Axios.interceptors.response.use(function (response) {
    if (response.status === 403) {
        storeService.clear();
        if (window.location.pathname !== '/login') {
            window.location = '/login'
        }
    }

    return response;
}, function (error) {
    if (error.response && error.response.status === 403) {
        storeService.clear();
        if (window.location.pathname !== '/login') {
            window.location = '/login'
        }
    }
    return Promise.reject(error);
});

