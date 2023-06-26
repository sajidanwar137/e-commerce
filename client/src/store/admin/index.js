import { 
    ADMIN_SAVE, 
    ADMIN_REMOVE,
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
        case ADMIN_SAVE: {
            const { token, password, ...updatedData } = payload.admin.data;
            const updatedPayload = {
                message: payload.admin.message,
                success: payload.admin.success,
                data: updatedData
            };
            return {
                ...state,
                ...updatedPayload,
            };
        }
        case ADMIN_REMOVE: {
            return {
                ...state,
                ...INITIAL_STATE,
            };
        }
        case GET_ADMIN_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_ADMIN_SUCCESS:
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