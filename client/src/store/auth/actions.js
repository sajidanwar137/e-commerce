import { ADMIN_LOGIN, ADMIN_LOGOUT } from './types';

export const adminLogin = (payload) => (dispatch) => {
    dispatch({ type: ADMIN_LOGIN, payload });
};

export const adminLogout = () => (dispatch) => {
    dispatch({ type: ADMIN_LOGOUT });
};