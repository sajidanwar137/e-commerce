import api from 'api/api';
import { 
    GET_USER_AVTAR_BEGIN,
    GET_USER_AVTAR_SUCCESS,
    GET_USER_AVTAR_FAIL,
    USER_SAVE, 
    USER_REMOVE 
} from "./types";

export const userSave = (payload) => (dispatch) => {
    dispatch({ type: USER_SAVE, payload });
};

export const userRemove = () => (dispatch) => {
    dispatch({ type: USER_REMOVE });
};

export const uplodUserAvtar = (payload, option) => async (dispatch) => {
    try {
        dispatch({ type: GET_USER_AVTAR_BEGIN });
        let user = null
        if(payload && option){
            user = await api.post('guest/upload-user-avtar', payload,{headers: {
                Authorization: `Bearer ${option}`,
            }});
        }
        dispatch({ type: GET_USER_AVTAR_SUCCESS, payload: user })
        return user;
    } catch (err) {
        dispatch({ type: GET_USER_AVTAR_FAIL, payload: err.message });
    }
}

export const updateUserProfile = (payload, option) => async (dispatch) => {
    try {
        dispatch({ type: GET_USER_AVTAR_BEGIN });
        let user = null
        if(payload && option){
            user = await api.post('guest/update-user-profile', payload,{headers: {
                Authorization: `Bearer ${option}`,
            }});
        }
        dispatch({ type: GET_USER_AVTAR_SUCCESS, payload: user })
        return user;
    } catch (err) {
        dispatch({ type: GET_USER_AVTAR_FAIL, payload: err.message });
    }
}


