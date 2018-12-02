/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

class Card extends React.Component {
    shouldComponentUpdate(props) {
        const { skirt, onDesk, opened } = this.props;
        return skirt !== props.skirt
            || onDesk !== props.onDesk
            || opened !== props.opened;
    }

    render() {
        const { face, skirt, onDesk, opened, onClick } = this.props;
        const className = `card-container${!onDesk ? ' hidden' : ''}${opened ? ' opened' : ''}`;
        const faceClass = `card-face ${face}`;
        const skirtClass = `card-skirt ${skirt}`;
        const cardProps = { onClick, className };
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
    skirt: PropTypes.string.isRequired,
    face: PropTypes.string.isRequired,
    onDesk: PropTypes.bool.isRequired,
    opened: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Card;
