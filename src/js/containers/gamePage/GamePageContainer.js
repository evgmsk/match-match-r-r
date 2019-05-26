/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { onLoadData } from '../../store/actions/appActions';
import { chooseCard } from '../../store/actions/deckActions';
import { GameClasses } from '../../constants/constants';
import GamePage from '../../ui/gamePage/GamePage';

class GamePageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.navigateDeck = this.navigateDeck.bind(this);
        this.onClick = this.onClick.bind(this);
        if (!props.player.name) {
            props.history.push('/login');
        }
    }
    componentDidMount() {
       this.props.onLoadData(false);
    }
    onClick(cardId, face) {
        const { game: { timeout }, chooseCard: chooseCardHandler } = this.props;
        if (timeout)
            return;
        chooseCardHandler({ cardId, face });
    }
    navigateDeck(e) {
        e.stopPropagation();
        const { deck, game } = this.props;
        const eventCase = e.key === 'Tab' || e.key === 'ArrowRight' || e.key === 'ArrowLeft';
        if (!e.target.classList.contains('card-container') || game.timeout || !eventCase)
            return;
        const idNum = parseInt(e.target.id.slice(4), 10);
        const card = deck.filter(x => x.cardId === e.target.id)[0];
        const cardsOnDesk = deck.filter(x => x.onDesk);
        const maxIndex = cardsOnDesk.length - 1;
        const cardIndex = cardsOnDesk.indexOf(card);
        let next;
        if (e.key === 'ArrowRight') {
            if (idNum === 0 || cardIndex === maxIndex)
                next = cardsOnDesk[0].cardId;
            else
                next = cardsOnDesk[cardIndex + 1].cardId;
        } else if (e.key === 'ArrowLeft') {
            if (idNum === deck.length || cardIndex === 0)
                next = cardsOnDesk[maxIndex].cardId;
            else
                next = cardsOnDesk[cardIndex - 1].cardId;
        } else if (e.key === 'Tab') {
            if (idNum === 0 || cardIndex === maxIndex) {
                e.preventDefault();
                next = cardsOnDesk[0].cardId;
            }
        }
        if (next)
            document.getElementById(next).focus();
    }
    render() {
        const { deck, game } = this.props;
        const { skirt, bigPanda } = game;
        const pandaClass = (bigPanda) ? 'big-panda' : 'small-panda';
        const deskClass = `game-desk ${GameClasses[game.difficulty]}`;
        return (
            <GamePage
                skirt={skirt}
                pandaClass={pandaClass}
                deskClass={deskClass}
                deck={deck}
                onKeyDown={this.navigateDeck}
                onClick={this.onClick}
            />
        );
    }
}

export default withRouter(connect(
    state => ({
        player: state.player,
        game: state.game,
        deck: state.deck,
    }),
    { onLoadData, chooseCard },
)(GamePageContainer));

GamePageContainer.propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    player: PropTypes.objectOf(PropTypes.any).isRequired,
    game: PropTypes.objectOf(PropTypes.any).isRequired,
    deck: PropTypes.arrayOf(PropTypes.any).isRequired,
    onLoadData: PropTypes.func.isRequired,
    chooseCard: PropTypes.func.isRequired,
};
