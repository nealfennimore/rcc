/* eslint-disable import/prefer-default-export */
import {
    select, takeLatest,
} from 'redux-saga/effects';
import {
    SET_SORT_ORDER,
} from 'global/actions/github/issues';
import {
    getSortable,
} from 'global/selectors/github/issues';

export function* cacheSortOrder() {
    try {
        const sortable = yield select( getSortable );
        window.localStorage.setItem( '__SORTED_STATE__', JSON.stringify( sortable ) );
    } catch ( error ) {
        console.error( error );
    }
}

export default function* main() {
    yield takeLatest( SET_SORT_ORDER, cacheSortOrder );
}
