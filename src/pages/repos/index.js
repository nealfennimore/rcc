import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepos, getIsFetching } from 'global/selectors/github/repos';
import Layout from 'global/components/Layout';
import Main from 'global/components/Main';
import RepoSideBar from 'global/components/RepoSideBar';

const Repos = ( {
    repos,
    isFetching,
} ) => {
    if ( ! repos.length || isFetching ) {
        return null;
    }

    return (
        <Layout>
            <RepoSideBar />
            <Main center>
                <h1>Welcome</h1>
            </Main>
        </Layout>
    );
};

Repos.propTypes = {
    repos: PropTypes.arrayOf( PropTypes.object ),
    isFetching: PropTypes.bool,
};

const connector = connect(
    ( state ) => ( {
        repos: getRepos( state ),
        isFetching: getIsFetching( state ),
    } ),
);

export default connector( Repos );
