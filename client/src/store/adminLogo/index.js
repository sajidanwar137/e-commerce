import {
    GET_ADMINLOGO_BEGIN,
    GET_ADMINLOGO_SUCCESS,
    GET_ADMINLOGO_FAIL
} from './types';

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null,
};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case GET_ADMINLOGO_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_ADMINLOGO_SUCCESS:
            return {
                ...state,
                loading: false,
                ...payload,
            }
        case GET_ADMINLOGO_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
};