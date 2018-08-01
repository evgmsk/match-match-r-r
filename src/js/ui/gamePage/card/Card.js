/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Card = ({ face, skirt, cardId, onDesk, opened, openCard }) => {
    const ref = React.createRef();
    const onClick = e => {
        console.log(ref.current);
        openCard(parseInt(ref.current.id, 10));
    };
    const onKeyDown = e => {
        openCard();
    };
    const className = `card-container${!onDesk ? ' hidden' : ''}${opened ? ' opened' : ''}`;
    console.log(className, onDesk);
    const faceClass = `card-face ${face}`;
    const skirtClass = `card-skirt ${skirt}`;
    const cardProps = { onClick, onKeyDown, className, id: cardId };
    return (

            <a {...cardProps} ref={ref} >
                <div className="card-flipper">
                    <div className={faceClass} />
                    <div className={skirtClass} />
                </div>
            </a>


    );
};
Card.propTypes = {
    cardId: PropTypes.number.isRequired,
    skirt: PropTypes.string.isRequired,
    face: PropTypes.string.isRequired,
    onDesk: PropTypes.bool.isRequired,
    opened: PropTypes.bool.isRequired,
    openCard: PropTypes.func.isRequired,
};

export default Card;
