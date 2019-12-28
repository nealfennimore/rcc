/* eslint-disable import/prefer-default-export */
import {
    call, select, put, takeLatest,
} from 'redux-saga/effects';
import * as github from 'global/services/github';
import * as user from 'global/selectors/user';

import { getRepoItems } from 'global/selectors/github/repos';
import {
    fetchReposSuccess, fetchReposError, FETCH_REPOS,
} from 'global/actions/github/repos';
import {
    fetchIssuesSuccess, fetchIssuesError, FETCH_ISSUES,
} from 'global/actions/github/issues';


export function* getEncodedToken() {
    const username = yield select( user.getUsername );
    const token = yield select( user.getToken );
    return yield call( [window, 'btoa'], `${username}:${token}` );
}

export function* getUserRepos() {
    try {
        const token = yield call( getEncodedToken );
        const repos = yield call( github.getUserRepos, token );
        yield put( fetchReposSuccess( repos ) );
    } catch ( error ) {
        yield put( fetchReposError( error ) );
    }
}

export function* getRepoIssues( action ) {
    try {
        const { repoId } = action.payload;
        const repos = yield select( getRepoItems );
        // eslint-disable-next-line camelcase
        const { full_name } = repos[repoId];
        const token = yield call( getEncodedToken );
        const issues = yield call( github.getRepoIssues, token, full_name );
        yield put( fetchIssuesSuccess( { repoId, issues } ) );
    } catch ( error ) {
        yield put( fetchIssuesError( error ) );
    }
}

export default function* main() {
    yield takeLatest( FETCH_REPOS, getUserRepos );
    yield takeLatest( FETCH_ISSUES, getRepoIssues );
}
