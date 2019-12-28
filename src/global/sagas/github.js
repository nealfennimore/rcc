/* eslint-disable import/prefer-default-export */
import { call, select, put } from 'redux-saga/effects';
import * as github from 'global/services/github';
import * as user from 'global/selectors/user';

import { fetchRepos, fetchReposSuccess, fetchReposError } from 'global/actions/github/repos';
import { fetchIssues, fetchIssuesSuccess, fetchIssuesError } from 'global/actions/github/issues';


export function* getEncodedToken() {
    const username = yield select( user.getUsername );
    const token = yield select( user.getToken );
    return yield call( [window, 'btoa'], `${username}:${token}` );
}

export function* getUserRepos() {
    yield put( fetchRepos() );
    try {
        const token = yield call( getEncodedToken );
        const repos = yield call( github.getUserRepos, token );
        yield put( fetchReposSuccess( repos ) );
    } catch ( error ) {
        yield put( fetchReposError( error ) );
    }
}

export function* getRepoIssues( repoFullPath ) {
    yield put( fetchIssues() );
    try {
        const token = yield call( getEncodedToken );
        const issues = yield call( github.getRepoIssues, token, repoFullPath );
        yield put( fetchIssuesSuccess( issues ) );
    } catch ( error ) {
        yield put( fetchIssuesError( error ) );
    }
}
