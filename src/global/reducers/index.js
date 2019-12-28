import { combineReducers } from 'redux';
import user from './user';
import github from './github';

export default () => combineReducers( {
    user,
    github,
} );
