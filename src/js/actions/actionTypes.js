/**
 * project match-match-r-r
 */
const ActionTypes = {
    // player actions
    SAVE_PLAYER: 'SAVE_PLAYER',
    SAVE_RECORD: 'SAVE_RECORD',
    // card actions
    DRAW_CARD: 'DRAW_CARD',
    OPEN_CARD: 'OPEN_CARD',
    CLOSE_CARD: 'CLOSE_CARD',
    HIDE_CARD: 'HIDE_CARD',
    // game actions
    SET_DECK: 'SET_DECK',
    DRAWING_DECK: 'DRAWING_DECK',
    SET_DIFFICULTY: 'SET_DIFFICULTY',
    SET_SKIRT: 'SET_SKIRT',
    SHOWED_CARDS: 'SHOWED_CARDS',
    HIDDEN_CARDS: 'HIDDEN_CARDS',
    START_TIMER: 'START_TIMER',
    RESET_TIME: 'RESET_TIME',
    // SET_TIMEOUT: 'SET_TIMEOUT',
    TICK: 'TICK',
    NEW_GAME_INIT: 'NEW_GAME_INIT',
    // app action
    TOTAL_RECORDS_LOADED: 'TOTAL_RECORDS_LOADED',
    HIDE_MAIN_MENU: 'HIDE_MAIN_MENU',
    DROP_MAIN_MENU: 'DROP_MAIN_MENU',
    DATA_LOADING: 'DATA_LOADING',
};

export default ActionTypes;
