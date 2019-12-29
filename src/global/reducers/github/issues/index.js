import { combineReducers } from 'redux';
import issues from './issues';
import sortable from './sortable';

export default combineReducers( {
    issues,
    sortable,
} );
