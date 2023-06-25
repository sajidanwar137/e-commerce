import { ADMIN_LOGIN, ADMIN_LOGOUT } from './types';
import { ADMIN_SAVE, ADMIN_REMOVE } from '../admin/types';

export const adminLogin = (payload) => (dispatch) => {
    dispatch({ type: ADMIN_LOGIN, payload });
    dispatch({ type: ADMIN_SAVE, payload });
};

export const adminLogout = () => (dispatch) => {
    dispatch({ type: ADMIN_LOGOUT });
    dispatch({ type: ADMIN_REMOVE });
};