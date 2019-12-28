import { call, fork } from 'redux-saga/effects';
import github from './github';

export default function* main() {
    yield fork( github );
    yield call( [console, 'log'], 'Sagas started' );
}
