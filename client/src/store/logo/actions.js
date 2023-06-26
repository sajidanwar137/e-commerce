import api from 'api/api';
import {
    GET_LOGO_BEGIN,
    GET_LOGO_SUCCESS,
    GET_LOGO_FAIL,
} from "./types";

export const getLogo = () => async (dispatch) => {
    try {
        dispatch({ type: GET_LOGO_BEGIN });
        const logo = await api.get('logo');
        dispatch({ type: GET_LOGO_SUCCESS, payload: logo })
        return logo;
    } catch (err) {
        dispatch({ type: GET_LOGO_FAIL, payload: err.message });
    }
}

export const updateLogo = (payload, option) => async (dispatch) => {
    try {
        dispatch({ type: GET_LOGO_BEGIN });
        let logo = null
        if(payload && option){
            logo = await api.post('/update-logo', payload,{headers: {
                Authorization: `Bearer ${option}`,
            }});
        }
        dispatch({ type: GET_LOGO_SUCCESS, payload: logo })
        return logo;
    } catch (err) {
        dispatch({ type: GET_LOGO_FAIL, payload: err.message });
    }
}