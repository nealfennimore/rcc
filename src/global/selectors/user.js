import { createSelector } from 'reselect';

const getSlice = ( state ) => state.user;

export const getUsername = createSelector( getSlice, ( user ) => user.username );
export const getToken = createSelector( getSlice, ( user ) => user.token );
