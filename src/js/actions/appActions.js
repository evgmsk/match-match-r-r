/**
 * project match-match-r-r
 */
import ActionTypes from './actionTypes';

export const onLoadData = payload => {
    return ({
        type: ActionTypes.DATA_LOADING,
        payload,
    });
};

export const saveRecords = payload => {
    return ({
        type: ActionTypes.TOTAL_RECORDS_LOADED,
        payload,
    });
};
