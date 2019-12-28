/* eslint-disable react/static-property-placement */
/* eslint-disable react/destructuring-assignment */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRepoById } from 'global/selectors/github/repos';
import { getIssuesByRepoId, getIsFetching } from 'global/selectors/github/issues';
import { fetchIssues } from 'global/actions/github/issues';
import Issue from './components/Issue';

export class Repo extends PureComponent {
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
        if ( ! this.props?.issues && ! this.props.isFetching ) {
            this.props.fetchIssues();
        }
    }

    render() {
        return (
            <>
                <h1>{this.props.repo.name}</h1>
                <ul>
                    {
                        this.props?.issues?.map( ( issue ) => (
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            <Issue key={issue.id} {...issue} />
                        ) )
                    }
                </ul>
            </>
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
