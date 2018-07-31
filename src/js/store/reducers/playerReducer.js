/**
 * project match-match-r-r
 */
import ActionTypes from '../../actions/actionTypes';

const timer = (state = {}, action) => {
    switch (action.type) {
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
