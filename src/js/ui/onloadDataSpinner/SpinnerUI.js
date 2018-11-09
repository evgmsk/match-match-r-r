/**
 * project
 */
import React from 'react';
import './spinner.scss';
/**
 * This component designed to show to user, that game data loading is in process
 * and used in the landing page and game.
 * Spinner's animation implemented with css.
 */

const Spinner = () => {
    return (
        <div className="spinner">
            <div className="spinner-circle">
                <div className="spinner-circle-center" />
            </div>
        </div>
    );
};

export default Spinner;
