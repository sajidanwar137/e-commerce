import { USER_LOGIN, USER_LOGOUT } from './types';

const INITIAL_STATE = {
    isAuthenticated: false,
    token: null,
};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case USER_LOGIN: {
            return {
                ...state,
                isAuthenticated: true,
                token: payload.user.data.token,
            };
        }
        case USER_LOGOUT: {
            return {
                ...state,
                ...INITIAL_STATE,
            };
        }
        default: 
            return state;
    }
};