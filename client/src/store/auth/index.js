import { ADMIN_LOGIN, ADMIN_LOGOUT } from './types';

const INITIAL_STATE = {
    isAuthenticated: false,
    token: null,
};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case ADMIN_LOGIN: {
            return {
                ...state,
                isAuthenticated: true,
                token: payload?.data?.token,
            };
        }
        case ADMIN_LOGOUT: {
            return {
                ...state,
                ...INITIAL_STATE,
            };
        }
        default: 
            return state;
    }
};