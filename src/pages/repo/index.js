/* eslint-disable react/static-property-placement */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import arrayMove from 'array-move';
import { getRepoById } from 'global/selectors/github/repos';
import { getSortedIssuesByRepoId, getIsFetching } from 'global/selectors/github/issues';
import { fetchIssues, setSortOrder } from 'global/actions/github/issues';
import Layout from 'global/components/Layout';
import Main from 'global/components/Main';
import Loader from 'global/components/Loader';
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
        setSortOrder: PropTypes.func,
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
        if ( ! this.props?.issues?.length && ! this.props.isFetching ) {
            this.props.fetchIssues();
        }
    }

    // eslint-disable-next-line react/sort-comp
    onSortEnd = ( { oldIndex, newIndex } ) => {
        this.props.setSortOrder(
            arrayMove( this.props?.issues, oldIndex, newIndex ),
        );
    };

    renderText() {
        if ( this.props.isFetching ) {
            return <Loader />;
        } if ( ! this.props?.issues?.length ) {
            return 'No issues :(';
        }
        return null;
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
                        {
                            this.renderText()
                        }

                        {
                            !! this.props?.issues?.length && (
                                <Issues
                                    issues={this.props.issues}
                                    isFetching={this.props.isFetching}
                                    onSortEnd={this.onSortEnd}
                                />
                            )
                        }
                    </section>
                </Main>
            </Layout>
        );
    }
}

const connector = connect(
    ( state, ownProps ) => ( {
        repo: getRepoById( state )( ownProps.match.params.id ),
        issues: getSortedIssuesByRepoId( state )( ownProps.match.params.id ),
        isFetching: getIsFetching( state ),
    } ),
    ( dispatch, ownProps ) => ( {
        fetchIssues: () => dispatch( fetchIssues( ownProps.match.params.id ) ),
        setSortOrder: ( issues ) => dispatch( setSortOrder( ownProps.match.params.id, issues ) ),
    } ),
);

export default connector( Repo );
