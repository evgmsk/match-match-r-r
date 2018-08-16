/**
 * project match-match-r-r
 */
import ActionTypes from '../../actions/actionTypes';

export const game = (state = {}, action) => {
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
        default:
            return state;
    }
};

export const time = (state = 0, action) => {
    switch (action.type) {
        case (ActionTypes.TICK):
            return state + 1;
        case (ActionTypes.RESET_TIME):
            return 0;
        default:
            return state;
    }
};
