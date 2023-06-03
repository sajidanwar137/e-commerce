import { LOGIN, LOGOUT } from './types';
import { SAVE, REMOVE } from '../admin/types';

export const login = (payload) => (dispatch) => {
    dispatch({ type: LOGIN, payload });
    dispatch({ type: SAVE, payload });
};

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT });
    dispatch({ type: REMOVE });
};