import {  GET_GYM, GET_GYM_ID, DELETE_GYM } from "../constant/actionType";

export default (gym = [], action) => {
  switch (action.type) {
    case GET_GYM:
      return  action.payload;

    case GET_GYM_ID:
      return [action.payload];

    case DELETE_GYM:
      return gym.filter((gym) => gym._id !== action.payload._id);
    default:
      return gym;
  }
}