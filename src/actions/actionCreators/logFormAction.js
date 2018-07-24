/**
 * project match-match-r-r
 */
import ActionTypes from '../../actions/actionTypes';

export const checkName = payload => {
    return ({
        type: ActionTypes.CHECK_NAME,
        payload,
    });
};

export const checkEmail = payload => {
    return ({
        type: ActionTypes.CHECK_NAME,
        payload,
    });
};

export const checkPassword = payload => {
    return ({
        type: ActionTypes.CHECK_NAME,
        payload,
    });
};
export const openForm = showForm => {
    return ({
        type: ActionTypes.SHOW_LOGIN_FORM,
        showForm,
    });
};
