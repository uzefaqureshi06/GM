import * as api from '../api/variety'
import {  GET_VARIETY_ID,  } from '../constant/actionType';



export const getVarietyByStoreIDAction = (id) => async (dispatch) => {
    try {
        const response = await api.getStoreByVarietyId(id);
        console.log(response.data.store)
        dispatch({ type: GET_VARIETY_ID, payload: response?.data?.variety });
    } catch (error) {
        console.log(error);
    }
};