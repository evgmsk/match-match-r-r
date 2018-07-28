/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Card = ({ face, skirt, cardId, name, outDesk, opened }) => {
    const className = `card-container ${outDesk && 'hidden'} ${opened && 'opened'}`;
    const faceClass = `card-face ${face}`;
    const skirtClass = `card-skirt ${skirt}`;
    return (
        <button id={cardId} name={name} className={className}>
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
    opened: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
};

export default Card;

