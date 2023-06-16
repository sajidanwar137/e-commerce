import { USER_SAVE, USER_REMOVE } from "./types";

export const save = (payload) => (dispatch) => {
    dispatch({ type: USER_SAVE, payload });
};

export const remove = () => (dispatch) => {
    dispatch({ type: USER_REMOVE });
};

