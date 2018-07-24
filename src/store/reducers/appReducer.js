/**
 * project match-match-r-r
 */
import ActionTypes from '../../actions/actionTypes';

const app = (state = {}, action) => {
    switch (action.type) {
        case (ActionTypes.SHOW_LOGIN_FORM):
            return {
                ...state,
                showForm: action.showForm,
            };
        default:
            return state;
    }
};

export default app;
