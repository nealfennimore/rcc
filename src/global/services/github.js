/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
import fetch from './fetch';

const GITHUB_API = 'https://api.github.com';

function getHeaders( token ) {
    return {
        Authorization: `Basic ${token}`,
    };
}

export async function getUserRepos( token ) {
    const ENDPOINT = `${GITHUB_API}/user/repos`;
    return await fetch( ENDPOINT, {
        headers: getHeaders( token ),
    } );
}

export async function getRepoIssues( token, repoFullPath ) {
    const ENDPOINT = `${GITHUB_API}/repos/${repoFullPath}/issues`;
    return await fetch( ENDPOINT, {
        headers: getHeaders( token ),
    } );
}
