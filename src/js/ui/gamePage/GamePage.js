/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Panda from '../../../images/publicdomainq-panda.svg';
import Card from '../Card';
import './gamePage.scss';
// {started && deck.map(card => <Card key={card.id} {...card} />)}
const GamePage = ({ deck, started }) => {
    return (
        <section className="game-section">
            <div className="game-desk-wrapper">
                <div className="game-desk">
                    <img className="big-panda" src={Panda} alt="" />
                    {!started && deck.map(card => <Card key={card.id} {...card} />)}
                </div>
            </div>
        </section>);
};

export default connect(
    state => ({
        deck: state.game.deck,
    }),
)(GamePage);

GamePage.propTypes = {
    deck: PropTypes.arrayOf(PropTypes.object).isRequired,
    started: PropTypes.bool.isRequired,
};
