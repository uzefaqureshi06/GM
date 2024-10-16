import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:8000/" });

//export const createGym = (name,image,description) => API.post("/",{name,image,description})
 export const getGym = () => API.get("gym/")
 export const getGymByID = (id) => API.get(`gym/${id}`);
export const deleteGym = (id) => API.delete(`gym/${id}`)