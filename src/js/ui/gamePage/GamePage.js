/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import Panda from '../../../images/publicdomainq-panda.svg';
import Timer from '../../containers/gamePage/TimerContainer';
import Card from './card/Card';
import './gamePage.scss';

const GamePage = ({deskClass, deck, pandaClass, skirt, onClick, onKeyDown }) => {
    return (
        <article className="game-section">
            <Timer />
            <div className="game-desk-wrapper">
                <div className={deskClass} onKeyDown={onKeyDown}>
                    <img className={pandaClass} src={Panda} alt="" />
                    {deck.map(card =>
                        <Card
                            key={card.cardId.toString()}
                            {...card}
                            skirt={skirt}
                            onClick={() => onClick(card.cardId, card.face)}
                        />)}
                </div>
            </div>
        </article>
    );
};

export default GamePage;

GamePage.propTypes = {
    deskClass: PropTypes.string.isRequired,
    deck: PropTypes.arrayOf(PropTypes.any).isRequired,
    pandaClass: PropTypes.string.isRequired,
    skirt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
