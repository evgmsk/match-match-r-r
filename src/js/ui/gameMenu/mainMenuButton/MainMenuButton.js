/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';

import './mainManuButton.scss';

const Button = props => {
    return (
        <button
            className={props.className}
            onClick={props.onClickHandler}
        >
            { props.name }
        </button>
    );
};

Button.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default Button;
