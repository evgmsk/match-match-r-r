/**
 * project match-match-r-r
 */
import ActionTypes from '../../actions/actionTypes';

const card = (state = {}, action) => {
    switch (action.type) {
        case (ActionTypes.OPEN_CARD):
            return (state.cardId !== action.payload)
                ? state
                : {
                    ...state,
                opened: true,
            };
        case (ActionTypes.DRAW_CARD):
            return (state.cardId !== action.payload)
                ? state
                : {
                    ...state,
                    onDesk: true,
                };
        case (ActionTypes.CLOSE_CARD):
            return (state.cardId !== action.payload)
                ? state
                : {
                    ...state,
                    opened: false,
                };
        case (ActionTypes.HIDE_CARD):
            return (state.cardId !== action.payload)
                ? state
                : {
                    ...state,
                    onDesk: false,
                };
        default:
            return state;
    }
};

const deck = (state = [], action) => {
    switch (action.type) {
        case (ActionTypes.DRAW_CARD):
            return state.map(c => card(c, action));
        case (ActionTypes.OPEN_CARD):
            return state.map(c => card(c, action));
        case (ActionTypes.CLOSE_CARD):
            return state.map(c => card(c, action));
        case (ActionTypes.HIDE_CARD):
            return state.map(c => card(c, action));
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
        case (ActionTypes.DRAWING_DECK):
            return {
                ...state,
                deckDrawing: action.payload,
            };
        case (ActionTypes.SET_SKIRT):
            return {
                ...state,
                skirt: action.payload,
            };
        case (ActionTypes.SET_DECK):
            return {
                ...state,
                deck: action.payload,
            };
        case (ActionTypes.SHOWED_CARDS):
            return {
                ...state,
                showedCard: action.payload,
            };
        case (ActionTypes.NEW_GAME_INIT):
            return {
                ...state,
                newGameInit: action.payload,
            };
        case (ActionTypes.START_TIMER):
            return {
                ...state,
                started: action.payload,
            };
        case (ActionTypes.TICK):
            return {
                ...state,
                time: state.time + 1,
            };
        case (ActionTypes.RESET_TIME):
            return {
                ...state,
                time: 0,
            };
        case (ActionTypes.DRAW_CARD):
            return {
                ...state,
                deck: deck(state.deck, action),
            };
        case (ActionTypes.OPEN_CARD):
            return {
                ...state,
                deck: deck(state.deck, action),
            };
        case (ActionTypes.CLOSE_CARD):
            return {
                ...state,
                deck: deck(state.deck, action),
            };
        case (ActionTypes.HIDE_CARD):
            return {
                ...state,
                deck: deck(state.deck, action),
            };
        default:
            return state;
    }
};

export default game;
