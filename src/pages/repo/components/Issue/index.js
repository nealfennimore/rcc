/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { SortableElement } from 'react-sortable-hoc';
import styles from './styles.pcss';

const Issue = ( {
    title,
    created_at,
    updated_at,
    user,
} ) => (
    <li className={styles.Issue}>
        <div className={styles.header}>
            <img alt={user.login} src={user.avatar_url} />
            <h2>{title}</h2>
        </div>
        <div className={styles.footer}>
            <time dateTime={created_at}>
                Created at:
                {' '}
                { format( new Date( created_at ), 'M/d/yyyy' )}
            </time>
            <time dateTime={updated_at}>
                Last updated:
                {' '}
                {formatDistanceToNow( new Date( updated_at ) )}
            </time>
        </div>
    </li>
);

Issue.propTypes = {
    title: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    user: PropTypes.shape( {
        login: PropTypes.string,
        avatar_url: PropTypes.string,
    } ),
};

export default SortableElement( Issue );
