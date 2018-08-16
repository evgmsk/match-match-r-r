/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import _ from 'lodash';
import { onLoadData } from '../../actions/appActions';
import { openCard, setDeck } from '../../actions/deckActions';
import DeskClasses from '../../constants/deskClasses';
import Panda from '../../../images/publicdomainq-panda.svg';
import Timer from './Timer';
import Card from './card/Card';
import './gamePage.scss';

class GamePage extends React.Component {
   componentDidMount() {
       this.props.onLoadData(false);
   }
   /*componentDidUpdate() {
       if (this.props.game.newGameInit)
           this.createDeck();
   }
   createDeck() {

   }*/
   render() {
       const { deck, game } = this.props;
       const { started, skirt, timeout } = game;
       const bigPandaClass = (started || timeout) ? 'small-panda' : 'big-panda';
       const deskClass = `game-desk ${DeskClasses[game.difficulty]}`;
       return (
           <section className="game-section">
               <Timer />
               <div className="game-desk-wrapper">
                   <div className={deskClass}>
                       <img className={bigPandaClass} src={Panda} alt="" />
                       {deck.map(card =>
                           <Card
                               key={card.cardId.toString()}
                               {...card}
                               skirt={skirt}
                               openCard={this.props.openCard}
                           />)}
                   </div>
               </div>
           </section>
       );
    }
}

export default connect(
    state => ({
        game: state.game,
        deck: state.deck,
    }),
    { onLoadData, openCard },
)(GamePage);

GamePage.propTypes = {
    game: PropTypes.objectOf(PropTypes.any).isRequired,
    deck: PropTypes.arrayOf(PropTypes.any).isRequired,
    onLoadData: PropTypes.func.isRequired,
    openCard: PropTypes.func.isRequired,
};
