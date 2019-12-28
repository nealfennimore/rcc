import React from 'react';
import PropTypes from 'prop-types';
import Issue from '../Issue';
import styles from './styles.pcss';

const Issues = ( {
    issues,
} ) => (
    <ul className={styles.Issues}>
        {
            issues?.map( ( issue ) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <Issue key={issue.id} {...issue} />
            ) )
        }
    </ul>
);

Issues.propTypes = {
    issues: PropTypes.arrayOf( PropTypes.object ),
};

export default Issues;
