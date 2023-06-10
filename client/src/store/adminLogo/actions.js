import api from 'api/apinew';
import {
    GET_ADMINLOGO_BEGIN,
    GET_ADMINLOGO_SUCCESS,
    GET_ADMINLOGO_FAIL,
} from "./types";

export const getAdminLogo = () => async (dispatch) => {
    try {
        
        dispatch({ type: GET_ADMINLOGO_BEGIN });

        const adminlogo = await api.get('adminlogo');

        dispatch({ type: GET_ADMINLOGO_SUCCESS, payload: adminlogo })
    } catch (err) {
        dispatch({ type: GET_ADMINLOGO_FAIL, payload: err.message });
    }
}
export const updateAdminLogo = (payload, option) => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMINLOGO_BEGIN });
        let adminlogo = null
        if(payload && option){
            adminlogo = await api.post('/update-admin-logo', payload,{headers: {
                Authorization: `Bearer ${option}`,
            }});
        }
        dispatch({ type: GET_ADMINLOGO_SUCCESS, payload: adminlogo })
    } catch (err) {
        dispatch({ type: GET_ADMINLOGO_FAIL, payload: err.message });
    }
}