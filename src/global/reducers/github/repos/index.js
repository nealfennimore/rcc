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
            allIds: action.payload.map( ( item ) => item.id ),
            byId: action.payload.reduce( ( acc, item ) => {
                acc[item.id] = item;
                return acc;
            }, {} ),
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
