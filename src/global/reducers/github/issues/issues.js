import {
    FETCH_ISSUES,
    FETCH_ISSUES_SUCCESS,
    FETCH_ISSUES_ERROR,
} from 'global/actions/github/issues';

const INITIAL_STATE = {
    isFetching: false,
    byRepoId: {},
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
            byRepoId: {
                ...state.byRepoId,
                [action.payload.repoId]: action.payload.issues,
            },
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
