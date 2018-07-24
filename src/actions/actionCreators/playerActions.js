/**
 * project match-match-r-r
 */
import { ActionTypes } from '../actionTypes';

export const saveUserName = name => ({
    type: ActionTypes.USER_NAME,
    payload: name,
});

export const saveUserId = id => ({
    type: ActionTypes.USER_ID,
    payload: id,
});
