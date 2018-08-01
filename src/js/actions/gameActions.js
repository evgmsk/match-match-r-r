/**
 * project match-match-r-r
 */
import ActionTypes from './actionTypes';

export const setDifficulty = difficulty => ({
    type: ActionTypes.SET_DIFFICULTY,
    payload: difficulty,
});
export const setSkirt = skirt => ({
    type: ActionTypes.SET_SKIRT,
    payload: skirt,
});
export const newGameInit = bool => ({
    type: ActionTypes.NEW_GAME_INIT,
    payload: bool,
});
export const startGame = bool => ({
    type: ActionTypes.START_TIMER,
    payload: bool,
});
export const drawingDeck = bool => ({
    type: ActionTypes.DRAWING_DECK,
    payload: bool,
});
export const resetTime = () => ({
    type: ActionTypes.RESET_TIME,
});
export const tick = () => ({
    type: ActionTypes.TICK,
});
export const cardOpened = difficulty => ({
    type: ActionTypes.SHOWED_CARDS,
    payload: difficulty,
});
export const setDeck = deck => {
    return {
        type: ActionTypes.SET_DECK,
        payload: deck,
    };
};
export const drawCard = id => {
    return {
        type: ActionTypes.DRAW_CARD,
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
