/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const getIssuesSlice = ( state ) => state.github.issues.issues;
const getSortableSlice = ( state ) => state.github.issues.sortable;

export const getIsFetching = createSelector( getIssuesSlice, ( issues ) => issues.isFetching );
export const getIssuesByRepoId = createSelector( getIssuesSlice, ( issues ) => ( repoId ) => issues?.byRepoId?.[repoId] );
export const getSortable = createSelector( getSortableSlice, ( sortable ) => sortable );
export const getSortableByRepoId = createSelector( getSortable, ( sortable ) => ( repoId ) => sortable?.byRepoId?.[repoId] );

export const getSortedIssuesByRepoId = createSelector(
    [getSortableByRepoId, getIssuesByRepoId],
    ( sortableByRepoId, issuesByRepoId ) => ( repoId ) => {
        const ids = sortableByRepoId( repoId );
        const issues = issuesByRepoId( repoId );

        const issueMapping = issues?.reduce( ( acc, issue ) => {
            acc[issue.id] = issue;
            return acc;
        }, {} );

        return ids?.map( ( id ) => issueMapping?.[id] ).filter( ( item ) => !! item );
    },
);
