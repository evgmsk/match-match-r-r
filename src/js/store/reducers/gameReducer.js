/**
 * project match-match-r-r
 */
import ActionTypes from '../../actions/actionTypes';

const card = (state = {}, action) => {
    switch (action.type) {
        case (ActionTypes.CARD_DRAWING):
            return {
                ...state,
                started: action.payload,
            };
        case (ActionTypes.CARD_OPENING):
            return {
                ...state,
                opening: action.payload,
            };
        case (ActionTypes.CARD_DRAWN):
            return {
                ...state,
                started: action.payload,
            };
        case (ActionTypes.CARDS_CLOSING):
            return {
                ...state,
                time: action.payload,
            };
        default:
            return state;
    }
};

const deck = (state = [], action) => {
    switch (action.type) {
        case (ActionTypes.CARD_DRAWING):
            return state.map(c => card(c, action));
        case (ActionTypes.CARD_OPENING):
            return state.map(c => card(c, action));
        case (ActionTypes.CARD_DRAWN):
            return state.map(c => card(c, action));
        case (ActionTypes.CARDS_CLOSING):
            return {
                ...state,
                time: action.payload,
            };
        default:
            return state;
    }
};
const game = (state = {}, action) => {
    switch (action.type) {
        case (ActionTypes.SET_DIFFICULTY):
            return {
                ...state,
                difficulty: action.payload,
            };
        case (ActionTypes.SET_SKIRT):
            return {
                ...state,
                skirt: action.payload,
            };
        case (ActionTypes.SHOWED_CARDS):
            return {
                ...state,
                showedCard: action.payload,
            };
        case (ActionTypes.NEW_GAME):
            return {
                ...state,
                newGame: action.payload,
            };
        case (ActionTypes.START_TIMER):
            return {
                ...state,
                started: action.payload,
            };
        case (ActionTypes.TICK):
            return {
                ...state,
                time: action.payload,
            };
        default:
            return state;
    }
};

export default game;
