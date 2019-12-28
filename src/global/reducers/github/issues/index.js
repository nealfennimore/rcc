import {
    FETCH_ISSUES,
    FETCH_ISSUES_SUCCESS,
    FETCH_ISSUES_ERROR,
} from 'global/actions/github/issues';

const INITIAL_STATE = {
    isFetching: false,
    items: [],
    byId: [],
};

export default function issues( state = INITIAL_STATE, action ) {
    switch ( action.type ) {
    case FETCH_ISSUES:
        return {
            ...state,
            isFetching: true,
        };
    case FETCH_ISSUES_SUCCESS:
        return {
            ...state,
            items: action.payload,
            byId: action.payload.map( ( item ) => item.id ),
            isFetching: false,
        };
    case FETCH_ISSUES_ERROR:
        return {
            ...state,
            isFetching: false,
        };
    default:
        return state;
    }
}
