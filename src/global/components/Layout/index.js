import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.pcss';

const Layout = ( { children, login } ) => (
    <div className={classnames( styles.Layout, {
        [styles.login]: login,
    } )}
    >
        { children }
    </div>
);

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
