/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import './mainManuButton.scss';


const MainGameButton = props => {
    const onClick = e => {
        e.stopPropagation();
        e.target.blur();
        props.onClickHandler();
        e.target.blur();
    };

    const onKeyDown = e => {
        e.stopPropagation();
        if (e.key === 'Enter' || e.key === 'Space')
            props.onClickHandler();
        e.target.blur();
    };

    return (
        <button
            className={props.className}
            onClick={onClick}
            onKeyDown={onKeyDown}
        >
            { props.name }
        </button>
    );
};

MainGameButton.propTypes = {
    onClickHandler: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default MainGameButton;
