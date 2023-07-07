import { 
    GET_ADMIN_BEGIN,
    GET_ADMIN_SUCCESS,
    GET_ADMIN_FAIL
} from './types';

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null,
    message: null
};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case GET_ADMIN_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                ...payload,
            }
        case GET_ADMIN_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
};