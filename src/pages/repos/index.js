/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepos, getIsFetching } from 'global/selectors/github/repos';
import { fetchRepos } from 'global/actions/github/repos';
import Layout from 'global/components/Layout';
import Main from 'global/components/Main';
import RepoSideBar from 'global/components/RepoSideBar';

export class Repos extends PureComponent {
    static propTypes = {
        repos: PropTypes.arrayOf( PropTypes.object ),
        isFetching: PropTypes.bool,
        fetchRepos: PropTypes.func,
    }

    componentDidMount() {
        if ( ! this.props.repos?.length ) {
            this.props.fetchRepos();
        }
    }

    render() {
        return (
            <Layout>
                <RepoSideBar />
                <Main center>
                    <h1>{ this.props.isFetching ? 'Loading...' : 'Welcome'}</h1>
                </Main>
            </Layout>
        );
    }
}

const connector = connect(
    ( state ) => ( {
        repos: getRepos( state ),
        isFetching: getIsFetching( state ),
    } ),
    ( dispatch ) => ( {
        fetchRepos: () => dispatch( fetchRepos() ),
    } ),
);

export default connector( Repos );
