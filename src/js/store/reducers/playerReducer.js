/**
 * project match-match-r-r
 */
import ActionTypes from '../../actions/actionTypes';

const records = (state = {}, payload) => {
    const { difficulty, time } = payload;
    return { ...state, [difficulty]: time };
};

const player = (state = {}, action) => {
    switch (action.type) {
        case (ActionTypes.SAVE_RECORD):
            return {
                ...state,
                records: records(state.records, action.payload),
            };
        case (ActionTypes.SET_PLAYER):
            return {
                ...state,
                name: action.payload.name,
                records: action.payload.records || {},
            };
        case (ActionTypes.REGISTRATION_OR_LOG_FAIL):
            return {
                ...state,
                logFail: action.payload,
            };
        default:
            return state;
    }
};

export default player;
