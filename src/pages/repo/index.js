/* eslint-disable react/static-property-placement */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepoById } from 'global/selectors/github/repos';
import { getIssuesByRepoId, getIsFetching } from 'global/selectors/github/issues';
import { fetchIssues } from 'global/actions/github/issues';
import Layout from 'global/components/Layout';
import Main from 'global/components/Main';
import RepoSideBar from 'global/components/RepoSideBar';
import Issues from './components/Issues';

export class Repo extends Component {
    static propTypes = {
        repo: PropTypes.shape( {
            name: PropTypes.string,
        } ),
        // eslint-disable-next-line react/no-unused-prop-types
        issues: PropTypes.arrayOf( PropTypes.object ),
        isFetching: PropTypes.bool,
        fetchIssues: PropTypes.func,
    }

    componentDidMount() {
        this.fetchIssues();
    }

    componentDidUpdate( prevProps ) {
        if ( prevProps?.match?.params?.id !== this.props?.match?.params?.id ) {
            this.fetchIssues();
        }
    }

    fetchIssues() {
        if ( ! this.props?.issues && ! this.props.isFetching ) {
            this.props.fetchIssues();
        }
    }

    render() {
        return (
            <Layout>
                <RepoSideBar />
                <Main>
                    <header>
                        <h1>{this.props.repo.name}</h1>
                    </header>
                    <section>
                        <Issues issues={this.props.issues} isFetching={this.props.isFetching} />
                    </section>
                </Main>
            </Layout>
        );
    }
}

const connector = connect(
    ( state, ownProps ) => ( {
        repo: getRepoById( state )( ownProps.match.params.id ),
        issues: getIssuesByRepoId( state )( ownProps.match.params.id ),
        isFetching: getIsFetching( state ),
    } ),
    ( dispatch, ownProps ) => ( {
        fetchIssues: () => dispatch( fetchIssues( ownProps.match.params.id ) ),
    } ),
);

export default connector( Repo );
