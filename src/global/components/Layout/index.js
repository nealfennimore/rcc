import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.pcss';

const Layout = ( { children } ) => (
    <div className={styles.Layout}>
        { children }
    </div>
);

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
