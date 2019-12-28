import React from 'react';
import PropTypes from 'prop-types';

const Issue = ( {
    title,
    created_at,
    updated_at,
    user,
} ) => (
    <li>
        <h2>{title}</h2>
        <img alt={user.login} src={user.avatar_url} />
        <time datetime={created_at}>
            {created_at}
        </time>
        <time datetime={updated_at}>
            {updated_at}
        </time>
    </li>
);

Issue.propTypes = {};

export default Issue;
