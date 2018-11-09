/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    shouldComponentUpdate(props) {
        const { skirt, onDesk, opened } = this.props;
        return skirt !== props.skirt
            || onDesk !== props.onDesk
            || opened !== props.opened;
    }
    onClick(e) {
        e.stopPropagation();
        const { timeout, chooseCard, cardId, face } = this.props;
        if (timeout)
            return;
        chooseCard({ cardId, face });
    }
    render() {
        const { face, skirt, onDesk, cardId, opened } = this.props;
        const className = `card-container${!onDesk ? ' hidden' : ''}${opened ? ' opened' : ''}`;
        const faceClass = `card-face ${face}`;
        const skirtClass = `card-skirt ${skirt}`;
        const cardProps = { onClick: this.onClick, className, id: cardId };
        return (
            <button {...cardProps}>
                <div className="card-flipper">
                    <div className={faceClass} />
                    <div className={skirtClass} />
                </div>
            </button>
        );
    }
}

Card.propTypes = {
    cardId: PropTypes.string.isRequired,
    skirt: PropTypes.string.isRequired,
    face: PropTypes.string.isRequired,
    onDesk: PropTypes.bool.isRequired,
    opened: PropTypes.bool.isRequired,
    timeout: PropTypes.bool.isRequired,
    chooseCard: PropTypes.func.isRequired,
};

export default Card;
