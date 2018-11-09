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

export const getRecords = payload => ({
    type: ActionTypes.GET_RECORDS,
    payload,
});
