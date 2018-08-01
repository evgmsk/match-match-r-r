/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import _ from 'lodash';
import { onLoadData } from '../../actions/appActions';
import { openCard, setDeck } from '../../actions/gameActions';
// import { CardsFaces, LevelToNumber } from '../../constants/cards';
import Panda from '../../../images/publicdomainq-panda.svg';
import Timer from './Timer';
import Card from './card/Card';
import './gamePage.scss';

class GamePage extends React.Component {
   componentDidMount() {
       console.log(this.props)
        this.props.onLoadData(false);
   }
   /*componentDidUpdate() {
       if (this.props.game.newGameInit)
           this.createDeck();
   }
   createDeck() {

   }*/
   render() {
       const { deck, started, newGameInit, skirt } = this.props.game;
       const bigPandaClass = (started || newGameInit) ? 'small-panda' : 'big-panda';
       return (
           <section className="game-section">
               <Timer time={this.props.game.time} />
               <div className="game-desk-wrapper">
                   <div className="game-desk">
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
        difficulty: state.game.difficulty,
    }),
    { onLoadData, openCard, setDeck },
)(GamePage);

GamePage.propTypes = {
    game: PropTypes.objectOf(PropTypes.any).isRequired,
    onLoadData: PropTypes.func.isRequired,
    setDeck: PropTypes.func.isRequired,
    openCard: PropTypes.func.isRequired,
};
