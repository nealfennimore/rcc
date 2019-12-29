import React from 'react';
import PropTypes from 'prop-types';
import { SortableContainer } from 'react-sortable-hoc';
import Issue from '../Issue';
import styles from './styles.pcss';

const Issues = ( {
    issues,
} ) => {
    return (
        <ul className={styles.Issues}>
            {
                issues?.map( ( issue, index ) => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <Issue key={issue.id} {...issue} index={index} />
                ) )
            }
        </ul>
    );
};

Issues.propTypes = {
    issues: PropTypes.arrayOf( PropTypes.object ),
};

export default SortableContainer( Issues );
