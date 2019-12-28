/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const getSlice = ( state ) => state.github.issues;

export const getIsFetching = createSelector( getSlice, ( issues ) => issues.isFetching );
export const getIssuesByRepoId = createSelector( getSlice, ( issues ) => ( repoId ) => issues.byRepoId[repoId] );
