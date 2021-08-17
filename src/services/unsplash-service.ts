import axios from "axios";

const CLIENT_API = 'ngie_vfGQ74LisAJJIJe4eLskAUeJYECZ1VWkveM4xw'
export const API_DEFAULT_PARAMS = {
    per_page: 20,
    client_id: CLIENT_API
}

export const api = axios.create({
    baseURL: 'https://api.unsplash.com/'
});