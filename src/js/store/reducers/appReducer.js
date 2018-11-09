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
        case (ActionTypes.GET_RECORDS):
            return {
                ...state,
                totalRecords: action.payload,
            };
        default:
            return state;
    }
};

export default app;
