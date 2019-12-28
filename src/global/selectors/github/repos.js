/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const getSlice = ( state ) => state.github.repos;

export const getIsFetching = createSelector( getSlice, ( repos ) => repos.isFetching );
export const getRepoItems = createSelector( getSlice, ( repos ) => repos.byId );
export const getRepoIds = createSelector( getSlice, ( repos ) => repos.allIds );

export const getRepos = createSelector( getRepoItems, ( items ) => Object.values( items ) );
export const getRepoById = createSelector( getRepoItems, ( items ) => ( id ) => items[id] );
