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
            allIds: action.payload.map( ( item ) => item.id ),
            byId: action.payload.reduce( ( acc, item ) => {
                acc[item.id] = item;
                return acc;
            }, {} ),
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
