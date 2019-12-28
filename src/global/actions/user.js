import { createAction } from 'redux-actions';

export const SET_USERNAME = 'SET_USERNAME';
export const setUsername = createAction( SET_USERNAME, ( username ) => ( { username } ) );

export const SET_TOKEN = 'SET_TOKEN';
export const setToken = createAction( SET_TOKEN, ( token ) => ( { token } ) );
