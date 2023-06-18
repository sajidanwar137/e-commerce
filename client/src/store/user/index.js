import { 
    USER_SAVE, 
    USER_REMOVE,
    GET_USER_AVTAR_BEGIN,
    GET_USER_AVTAR_SUCCESS,
    GET_USER_AVTAR_FAIL 
} from './types';

const INITIAL_STATE = {
    data: [],
    loading: false,
    error: null,
};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case USER_SAVE: {
            const { token, password, ...updatedData } = payload.user.data;
            const updatedPayload = {
                message: payload.user.message,
                success: payload.user.success,
                data: updatedData
            };
            return {
                ...state,
                ...updatedPayload,
            };
        }
        case USER_REMOVE: {
            return {
                ...state,
                ...INITIAL_STATE,
            };
        }
        case GET_USER_AVTAR_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_USER_AVTAR_SUCCESS:
            const { token, password, ...updatedData } = payload.data;
            const updatedPayload = {
                message: payload.message,
                success: payload.success,
                data: updatedData
            };
            return {
                ...state,
                loading: false,
                ...updatedPayload,
            }
        case GET_USER_AVTAR_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
};