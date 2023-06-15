import { USER_LOGIN, USER_LOGOUT } from './types';
import { USER_SAVE, USER_REMOVE } from '../user/types';

export const userLogin = (payload) => (dispatch) => {
    dispatch({ type: USER_LOGIN, payload });
    dispatch({ type: USER_SAVE, payload });
};

export const userLogout = () => (dispatch) => {
    dispatch({ type: USER_LOGOUT });
    dispatch({ type: USER_REMOVE });
};