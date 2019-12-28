import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRepos, getIsFetching } from 'global/selectors/github/repos';
import styles from './styles.pcss';

const RepoSideBar = ( {
    repos,
    isFetching,
} ) => {
    return (
        <aside className={styles.RepoSideBar}>
            <h2>Repos</h2>
            {
                isFetching && (
                    'Loading...'
                )
            }

            {
                !! repos?.length && (
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
                )
            }
        </aside>
    );
};

RepoSideBar.propTypes = {
    repos: PropTypes.arrayOf( PropTypes.object ),
    isFetching: PropTypes.bool,
};

const connector = connect(
    ( state ) => ( {
        repos: getRepos( state ),
        isFetching: getIsFetching( state ),
    } ),
);

export default connector( RepoSideBar );
