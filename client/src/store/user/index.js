import { USER_SAVE, USER_REMOVE } from './types';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case USER_SAVE: {
            const obj = {
                data: {
                    email: payload.user.data.email,
                    name: payload.user.data.name,
                    profileImageName: payload.user.data.profileImageName,
                    profileImagePath: payload.user.data.profileImagePath,
                    profileImageOriginalurl: payload.user.data.profileImageOriginalurl,
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
        default:
            return state;
    }
};