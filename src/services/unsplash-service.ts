import axios from "axios";

const CLIENT_API = 'ngie_vfGQ74LisAJJIJe4eLskAUeJYECZ1VWkveM4xw'

export const getPhotos = axios.create({
    baseURL: 'https://api.unsplash.com/photos/?client_id=' + CLIENT_API
});

export const searchPhotos = axios.create({
    baseURL: 'https://api.unsplash.com/search/photos/?client_id=' + CLIENT_API
});
