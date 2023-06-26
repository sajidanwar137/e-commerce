import {
    GET_LOGO_BEGIN,
    GET_LOGO_SUCCESS,
    GET_LOGO_FAIL
} from './types';

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null,
};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case GET_LOGO_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_LOGO_SUCCESS:
            return {
                ...state,
                loading: false,
                ...payload,
            }
        case GET_LOGO_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
};