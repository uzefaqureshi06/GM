import { GET_VARIETY_ID } from "../constant/actionType";

export default (variety = [], action) => {
  switch (action.type) {
  

    case GET_VARIETY_ID:
    return [action.payload];

    default:
      return variety;
  }
}