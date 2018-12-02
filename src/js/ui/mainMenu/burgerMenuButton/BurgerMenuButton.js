/**
 * project ring4.
 */
import React from 'react';
import './burgerMenuButton.scss';

const BurgerMenuButton = React.forwardRef((props, ref) => {
    return (
        <button {...props} ref={ref}>
            <span className="first-line" />
            <span className="middle-line" />
            <span className="last-line" />
        </button>
    );
});

export default BurgerMenuButton;
