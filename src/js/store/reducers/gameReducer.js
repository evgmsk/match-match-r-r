/**
 * project match-match-r-r
 */
import ActionTypes from '../actions/actionTypes';

export const game = (state = {}, action) => {
    switch (action.type) {
        case (ActionTypes.SET_DIFFICULTY):
            return {
                ...state,
                difficulty: action.payload,
            };
        case (ActionTypes.SET_TIMEOUT):
            return {
                ...state,
                timeout: action.payload,
            };
        case (ActionTypes.SET_SKIRT):
            return {
                ...state,
                skirt: action.payload,
            };
        case (ActionTypes.SET_PANDA):
            return {
                ...state,
                bigPanda: action.payload,
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
