import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRepos, getIsFetching } from 'global/selectors/github/repos';

const Repos = ( {
    repos,
    isFetching,
} ) => {
    if ( ! repos.length || isFetching ) {
        return null;
    }

    return (
        <ul>
            {
                repos.map( ( repo ) => (
                    <li key={repo.id}>
                        <Link to={`/repos/${repo.id}`}>
                            {repo.name}
                        </Link>
                    </li>
                ) )
            }
        </ul>
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
