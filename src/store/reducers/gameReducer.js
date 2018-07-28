/**
 * project match-match-r-r
 */
import ActionTypes from '../../js/actions/actionTypes';

const timer = (state = {}, action) => {
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
        case (ActionTypes.SHOWED_CARD):
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

export default timer;