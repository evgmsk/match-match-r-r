/**
 * project match-match-r-r
 */
import ActionTypes from '../../actions/actionTypes';

const loginForm = (state = {}, action) => {
    switch (action.type) {
        case (ActionTypes.START_TIMER):
            return {
                ...state,
                emailValid: action.payload,
            };
        case (ActionTypes.CHECK_PASSWORD):
            return {
                ...state,
                passwordValid: action.payload,
            };
        case (ActionTypes.CHECK_NAME):
            return {
                ...state,
                passwordValid: action.payload,
            };
        default:
            return state;
    }
};

export default loginForm;