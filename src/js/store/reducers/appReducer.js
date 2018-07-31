/**
 * project match-match-r-r
 */
import ActionTypes from '../../actions/actionTypes';

const app = (state = {}, action) => {
    switch (action.type) {
        case (ActionTypes.DATA_LOADING):
            return {
                ...state,
                dataLoading: action.payload,
            };
        case (ActionTypes.TOTAL_RECORDS_LOADED):
            return {
                ...state,
                totalRecords: action.payload,
            };
        case (ActionTypes.HIDE_MAIN_MENU):
            return {
                ...state,
                mainMenu: action.payload,
            };
        case (ActionTypes.DROP_MAIN_MENU):
            return {
                ...state,
                mainMenuDropped: !state.mainMenuDropped,
            };
        default:
            return state;
    }
};

export default app;
