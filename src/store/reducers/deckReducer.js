/**
 * project match-match-r-r
 */
import ActionTypes from '../../js/actions/actionTypes';

const card = (state = [], action) => {
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
        case (ActionTypes.SET_DECK):
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

export default deck;
