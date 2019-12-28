import { SET_USERNAME, SET_TOKEN } from 'global/actions/user';

const INITIAL_STATE = {
    username: null,
    token: null,
};

export default function user( state = INITIAL_STATE, action ) {
    switch ( action.type ) {
    case SET_USERNAME:
    case SET_TOKEN:
        return {
            ...state,
            ...action.payload,
        };
    default:
        return state;
    }
}
