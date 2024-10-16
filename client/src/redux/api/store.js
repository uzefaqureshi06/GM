import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:8000/" });

//export const createGym = (name,image,description) => API.post("/",{name,image,description})
export const getStore = () => API.get("store/")
export const getStoreByID = (id) => API.get(`store/${id}`);
export const deleteGym = (id) => API.delete(`store/${id}`)