/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ face, skirt, cardId, outDesk, open }) => {
    const className = `card-container ${outDesk && 'hidden'} ${open && 'open'}`;
    const faceClass = `card-face ${face}`;
    const skirtClass = `card-skirt ${skirt}`;
    return (
        <button id={cardId} className={className}>
            <div className="card-flipper">
                <div className={faceClass} />
                <div className={skirtClass} />
            </div>
        </button>
    );
};
Card.propTypes = {
    cardId: PropTypes.string.isRequired,
    skirt: PropTypes.string.isRequired,
    face: PropTypes.string.isRequired,
    outDesk: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
};

export default Card;

