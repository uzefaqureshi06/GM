
import axios from 'axios'

const API = axios.create({ baseURL: "http://localhost:8000/" });


export const getStoreByVarietyId = (id) => API.get(`variety/${id}`);
