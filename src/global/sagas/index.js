import { call, fork } from 'redux-saga/effects';
import github from './github';
import sortable from './sortable';

export default function* main() {
    yield fork( github );
    yield fork( sortable );
    yield call( [console, 'log'], 'Sagas started' );
}
