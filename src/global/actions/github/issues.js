import { createAction } from 'redux-actions';

export const FETCH_ISSUES = 'FETCH_ISSUES';
export const fetchIssues = createAction( FETCH_ISSUES, ( repoId ) => ( { repoId } ) );

export const FETCH_ISSUES_SUCCESS = 'FETCH_ISSUES_SUCCESS';
export const fetchIssuesSuccess = createAction( FETCH_ISSUES_SUCCESS );

export const FETCH_ISSUES_ERROR = 'FETCH_ISSUES_ERROR';
export const fetchIssuesError = createAction( FETCH_ISSUES_ERROR );
