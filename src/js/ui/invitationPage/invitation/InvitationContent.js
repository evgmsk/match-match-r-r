/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import './invitationContent.scss';

const InvitationContent = props => {
    return (
        <section className="invitation-body">
            <h1>Welcome to the Match-match Game!</h1>
            <div className="game-description">
                <p>
                    {
                        `The objective of the game is to remove all
                        cards from the desk as fast as possible.`
                    }
                </p>
                <p>
                    {
                        `It sounds easy, but to do this you need to find all pairs
                        (same cards) on the desk and open them successively.
                        If the second opened card is not the same as the first one,
                        cards remain on the table and turn face down again. You can try
                        to discover pairs of cards randomly in hope on random matching,
                        but it may take a long time. More wisely trying to remember
                        positions of cards, which has been discovered earlier and then
                        open pairs of same cards consequentially.
                        You can choose the difficulty level and the card's
                        skirt for your pleasure.`
                    }
                </p>
                <p>
                    {'Train your memory and catch luck!'}
                </p>
            </div>
            <button onClick={props.onClick} className="invitation-continue">Press to continue</button>
        </section>
    );
};

InvitationContent.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default InvitationContent;
