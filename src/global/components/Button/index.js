import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.pcss';

const Button = ( {
    children,
    className,
    onClick,
    type,
} ) => (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classnames( styles.button, className )} onClick={onClick}>
        {children}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
};

Button.defaultProps = {
    type: 'button',
};

export default Button;
