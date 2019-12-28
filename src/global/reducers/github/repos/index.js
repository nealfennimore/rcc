import {
    FETCH_REPOS,
    FETCH_REPOS_SUCCESS,
    FETCH_REPOS_ERROR,
} from 'global/actions/github/repos';

const INITIAL_STATE = {
    isFetching: false,
    items: [],
    byId: [],
};

export default function repos( state = INITIAL_STATE, action ) {
    switch ( action.type ) {
    case FETCH_REPOS:
        return {
            ...state,
            isFetching: true,
        };
    case FETCH_REPOS_SUCCESS:
        return {
            ...state,
            items: action.payload,
            byId: action.payload.map( ( item ) => item.id ),
            isFetching: false,
        };
    case FETCH_REPOS_ERROR:
        return {
            ...state,
            isFetching: false,
        };
    default:
        return state;
    }
}
