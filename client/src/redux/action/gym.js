import * as api from '../api/gym'
import { GET_GYM, GET_GYM_ID, DELETE_GYM } from '../constant/actionType';

// export const creategymAction = (name,image,description) => async (dispatch) => {
//     try {
//         const response = await api.createGym(name,image,description);
//         console.log(response)
//         dispatch({ type: CREATE_GYM, payload: [] })
//     } catch (error) {
//         console.log(error)
//     }
// }
export const getgymAction = () => async (dispatch) => {
    try {
        const response = await api.getGym();
        console.log(response)
        dispatch({ type: GET_GYM, payload: response?.data?.gym })

    } catch (error) {
        console.log(error)
    }
}


export const getgymActionByID = (id) => async (dispatch) => {
    try {
        const response = await api.getGymByID(id);
        console.log(response.data.gym)
        dispatch({ type: GET_GYM_ID, payload: response?.data?.gym });
    } catch (error) {

        
        console.log(error);
    }
};


export const deletegymAction = (id) => async (dispatch) => {
    try {
        const response = await api.deleteGym(id);
        console.log(response)
        dispatch({ type: DELETE_GYM, payload: response?.data })
    } catch (error) {
        console.log(error)
    }
}

