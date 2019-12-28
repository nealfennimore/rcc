import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.pcss';

const Main = ( { children, center } ) => (
    <main className={classnames( styles.Main, {
        [styles.center]: center,
    } )}
    >
        { children }
    </main>
);

Main.propTypes = {
    children: PropTypes.node,
    center: PropTypes.bool,
};

export default Main;
