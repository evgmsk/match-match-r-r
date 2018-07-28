/**
 * project match-match-r-r
 */
import ActionTypes from './actionTypes';

export const drawingCard = id => {
    return {
        type: ActionTypes.CARD_DRAWING,
        payload: id,
    };
};

export const drawnCard = id => {
    return {
        type: ActionTypes.CARD_OPENED,
        payload: id,
    };
};

export const openCard = id => {
    return {
        type: ActionTypes.CARD_OPENING,
        payload: id,
    };
};

export const closeCard = id => {
    return {
        type: ActionTypes.CARDS_CLOSING,
        payload: id,
    };
};
