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
            const obj = {
                data: {
                    email: payload.user.data.email,
                    name: payload.user.data.name,
                    avtarName: payload.user.data.avtarName,
                    avtarPath: payload.user.data.avtarPath,
                    avtarOriginalurl: payload.user.data.avtarOriginalurl,
                    token: payload.user.data.token,
                    _id: payload.user.data._id
                },
                message: payload.user.message,
                success: payload.user.success
            }
            return {
                ...state,
                ...obj,
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
            return {
                ...state,
                loading: false,
                ...payload,
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