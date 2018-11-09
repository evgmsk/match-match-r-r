/**
 * project match-match-r-r
 */
import ActionTypes from './actionTypes';

export const setDeck = deck => {
    return {
        type: ActionTypes.SET_DECK,
        payload: deck,
    };
};
export const clearDeck = () => {
    return {
        type: ActionTypes.CLEAR_DECK,
    };
};
export const drawCard = id => {
    return {
        type: ActionTypes.DRAW_CARD,
        payload: id,
    };
};
export const chooseCard = id => {
    return {
        type: ActionTypes.CHOOSE_CARD,
        payload: id,
    };
};
export const openCard = id => {
    return {
        type: ActionTypes.OPEN_CARD,
        payload: id,
    };
};
export const closeCard = id => {
    return {
        type: ActionTypes.CLOSE_CARD,
        payload: id,
    };
};
export const hideCard = id => {
    return {
        type: ActionTypes.HIDE_CARD,
        payload: id,
    };
};