/* eslint-disable import/prefer-default-export */
import { call, select } from 'redux-saga/effects';
import * as github from 'global/services/github';
import * as user from 'global/selectors/user';

export function* getEncodedToken() {
    const username = yield select( user.getUsername );
    const token = yield select( user.getToken );
    return yield call( [window, 'btoa'], `${username}:${token}` );
}

export function* getUserRepos() {
    const token = yield call( getEncodedToken );
    return yield call( github.getUserRepos, token );
}

export function* getRepoIssues( repoFullPath ) {
    const token = yield call( getEncodedToken );
    return yield call( github.getRepoIssues, token, repoFullPath );
}
