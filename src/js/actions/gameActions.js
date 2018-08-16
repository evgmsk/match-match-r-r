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
export const setTimeout = bool => ({
    type: ActionTypes.SET_SKIRT,
    payload: bool,
});
export const newGameInit = () => ({
    type: ActionTypes.NEW_GAME_INIT,
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
