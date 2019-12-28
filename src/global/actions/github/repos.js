import { createAction } from 'redux-actions';

export const FETCH_REPOS = 'FETCH_REPOS';
export const fetchRepos = createAction( FETCH_REPOS );

export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const fetchReposSuccess = createAction( FETCH_REPOS_SUCCESS );

export const FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR';
export const fetchReposError = createAction( FETCH_REPOS_ERROR );
