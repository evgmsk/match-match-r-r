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
export const drawingCard = id => {
    return {
        type: ActionTypes.CARD_DRAWING,
        payload: id,
    };
};
export const onDrawnCard = id => {
    return {
        type: ActionTypes.CARD_DRAWN,
        payload: id,
    };
};
export const openingCard = id => {
    return {
        type: ActionTypes.CARD_OPENED,
        payload: id,
    };
};
export const onOpenCard = id => {
    return {
        type: ActionTypes.CARD_OPENING,
        payload: id,
    };
};
export const closingCard = id => {
    return {
        type: ActionTypes.CARDS_CLOSING,
        payload: id,
    };
};
export const onCloseCard = id => {
    return {
        type: ActionTypes.CARDS_CLOSING,
        payload: id,
    };
};
