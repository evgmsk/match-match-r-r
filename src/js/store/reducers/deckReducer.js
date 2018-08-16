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
            return [...state, action.payload];
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

export default deck;
