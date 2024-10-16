import { CREATE_STORE, GET_STORE, DELETE_GYM, GET_STORE_ID } from "../constant/actionType";

export default (store = [], action) => {
  switch (action.type) {
    case GET_STORE:
      return action.payload;

    case GET_STORE_ID:
    return [action.payload];

   // case DELETE_GYM:
    //  return store.filter((store) => store._id !== action.payload._id);
    default:
      return store;
  }
}