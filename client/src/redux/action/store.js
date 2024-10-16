import * as api from '../api/store'
import { GET_STORE, GET_STORE_ID,  } from '../constant/actionType';

export const getstoreAction = () => async (dispatch) => {
    try {
        const response = await api.getStore();
        console.log(response)
        dispatch({ type: GET_STORE, payload: response?.data?.store })

    } catch (error) {
        console.log(error)
    }
}

export const getstoreActionByID = (id) => async (dispatch) => {
    try {
        const response = await api.getStoreByID(id);
        console.log(response.data.store)
        dispatch({ type: GET_STORE_ID, payload: response?.data?.store });
    } catch (error) {
        console.log(error);
    }
};