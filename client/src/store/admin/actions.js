import api from 'api/api';
import { 
    GET_ADMIN_BEGIN,
    GET_ADMIN_SUCCESS,
    GET_ADMIN_FAIL,
    ADMIN_SAVE, 
    ADMIN_REMOVE 
} from "./types";

export const adminSave = (payload) => (dispatch) => {
    dispatch({ type: ADMIN_SAVE, payload });
};

export const adminRemove = () => (dispatch) => {
    dispatch({ type: ADMIN_REMOVE });
};

export const updateAdminProfile = (payload, option) => async (dispatch) => {
    try {
        dispatch({ type: GET_ADMIN_BEGIN });
        let admin = null
        if(payload && option){
            admin = await api.post('/update-admin-profile', payload,{headers: {
                Authorization: `Bearer ${option}`,
            }});
            
        }
        dispatch({ type: GET_ADMIN_SUCCESS, payload: admin })
        return admin;
    } catch (err) {
        dispatch({ type: GET_ADMIN_FAIL, payload: err.message });
    }
}

