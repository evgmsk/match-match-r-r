/**
 * project ring4.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './burgerMenuButton.scss';

const BurgerMenuButton = props => {
    const ref = React.createRef();
    const disabled = (props.timeout || props.started);
    const onClickBurger = e => {
        e.preventDefault();
        e.stopPropagation();
        ref.current.classList.toggle('clicked');
        ref.current.blur();
        props.onClick();
    };
    const buttonProps = { disabled, className: props.className, onClick: onClickBurger };
    return (
        <button {...buttonProps} ref={ref}>
            <span className="first-line" />
            <span className="middle-line" />
            <span className="last-line" />
        </button>
    );
};

export default connect(
    state => ({
        timeout: state.game.timeout,
        started: state.game.started,
    }),
)(BurgerMenuButton);

BurgerMenuButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string.isRequired,
    timeout: PropTypes.bool.isRequired,
    started: PropTypes.bool.isRequired,
};

BurgerMenuButton.defaultProps = {
    onClick: f => f,
};
