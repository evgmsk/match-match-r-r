/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onLoadData } from '../../actions/appActions';
import Panda from '../../../images/publicdomainq-panda.svg';
import Timer from './Timer';
import Card from '../Card';
import './gamePage.scss';
// {started && deck.map(card => <Card key={card.id} {...card} />)}
class GamePage extends React.Component {
   componentDidMount() {
        this.props.onLoadData(false);
   }
   render() {
       const { deck, started, newGame, skirt } = this.props;
       const bigPandaClass = (started || newGame) ? 'small-panda' : 'big-panda';
       return (
           <section className="game-section">
               <Timer time={this.props.time} />
               <div className="game-desk-wrapper">
                   <div className="game-desk">
                       <img className={bigPandaClass} src={Panda} alt="" />
                       {deck.map(card => <Card key={card.id} {...card} skirt={skirt} />)}
                   </div>
               </div>
           </section>
       );
    }
}

export default connect(
    state => ({
        deck: state.game.deck,
        time: state.game.time,
        newGame: state.game.newGame,
        started: state.game.started,
        skirt: state.game.skirt,
    }),
    { onLoadData },
)(GamePage);

GamePage.propTypes = {
    deck: PropTypes.arrayOf(PropTypes.object).isRequired,
    time: PropTypes.number.isRequired,
    newGame: PropTypes.bool.isRequired,
    started: PropTypes.bool.isRequired,
    skirt: PropTypes.string.isRequired,
    onLoadData: PropTypes.func.isRequired,
};
