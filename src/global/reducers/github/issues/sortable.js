import {
    FETCH_ISSUES_SUCCESS,
    SET_SORT_ORDER,
} from 'global/actions/github/issues';
import uniq from 'lodash/uniq';

const INITIAL_STATE = JSON.parse( window.localStorage.getItem( '__SORTED_STATE__' ) ) || {};

function getPreviousSort( state, action ) {
    const prev = state?.byRepoId?.[action.payload?.repoId];
    if ( prev ) {
        return prev;
    }
    return [];
}


export default function sortable( state = INITIAL_STATE, action ) {
    switch ( action.type ) {
    case FETCH_ISSUES_SUCCESS:
        return {
            ...state,
            byRepoId: {
                ...state.byRepoId,
                [action.payload.repoId]: uniq( [
                    ...getPreviousSort( state, action ),
                    ...action.payload.issues.map( ( issue ) => issue.id ),
                ] ),
            },
        };
    case SET_SORT_ORDER:
        return {
            ...state,
            byRepoId: {
                ...state.byRepoId,
                [action.payload.repoId]: action.payload.issues.map( ( issue ) => issue.id ),
            },
        };
    default:
        return state;
    }
}
