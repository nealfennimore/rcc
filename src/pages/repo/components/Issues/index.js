import React from 'react';
import PropTypes from 'prop-types';
import Issue from '../Issue';
import styles from './styles.pcss';

const Issues = ( {
    issues,
    isFetching,
} ) => {
    if ( isFetching ) {
        return 'Loading...';
    }

    if ( ! issues?.length ) {
        return 'No issues';
    }

    return (
        <ul className={styles.Issues}>
            {
                issues?.map( ( issue ) => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <Issue key={issue.id} {...issue} />
                ) )
            }
        </ul>
    );
};

Issues.propTypes = {
    issues: PropTypes.arrayOf( PropTypes.object ),
    isFetching: PropTypes.bool,
};

export default Issues;
