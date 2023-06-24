import { SAVE, REMOVE } from './types';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case SAVE: {
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
        case REMOVE: {
            return {
                ...state,
                ...INITIAL_STATE,
            };
        }
        default:
            return state;
    }
};