import { SAVE, REMOVE } from './types';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case SAVE: {
            const obj = {
                data: {
                    email: payload.admin.data.email,
                    name: payload.admin.data.name,
                    token: payload.admin.data.token,
                    _id: payload.admin.data._id
                },
                message: payload.admin.message,
                success: payload.admin.success
            }
            return {
                ...state,
                ...obj,
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