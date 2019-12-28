/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const getSlice = ( state ) => state.github.repos;

export const getIsFetching = createSelector( getSlice, ( repos ) => repos.isFetching );
export const getRepos = createSelector( getSlice, ( repos ) => Object.values( repos.byId ) );
