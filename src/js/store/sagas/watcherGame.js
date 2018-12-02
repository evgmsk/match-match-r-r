/**
 * project match-match-r-r
 */
import { put, takeLatest } from 'redux-saga/effects';
import _ from 'lodash';
import ActionTypes from '../../actions/actionTypes';
import { CardsFaces, LevelToNumber } from '../../constants/constants';

function* setDifficulty() {
    yield put({ type: ActionTypes.NEW_GAME_INIT });
}

function* endGame(store) {
    const { game: { difficulty }, time, player: { records } } = store.getState();
    yield put({ type: ActionTypes.START_TIMER, payload: false });
    if (!records[difficulty] || records[difficulty] > time) {
        yield put({
            type: ActionTypes.SAVE_RECORD,
            payload: { time, difficulty },
        });
    }
    yield put({ type: ActionTypes.CLEAR_DECK });
    yield put({ type: ActionTypes.RESET_TIME });
    yield put({ type: ActionTypes.SET_PANDA, payload: true });
}

function* initGame(store) {
    const { difficulty } = store.getState().game;
    yield put({ type: ActionTypes.RESET_TIME });
    yield put({ type: ActionTypes.CLEAR_DECK });
    yield put({ type: ActionTypes.SET_PANDA, payload: false });
    yield put({ type: ActionTypes.SET_TIMEOUT, payload: true });
    const num = LevelToNumber[difficulty];
    const cards = _.shuffle(CardsFaces).slice(0, num);
    let deck = cards.reduce((d, face) => {
        const card = {
            face,
            onDesk: true,
            opened: false,
        };
        d.push(card);
        return d;
    }, []);

    deck = _.shuffle([...deck, ...deck]);
    deck = deck.map((card, i) => ({ ...card, cardId: `card${i}` }));
    yield put({ type: ActionTypes.SET_DECK, payload: deck });
}

export default function* watcherGame(store) {
    yield takeLatest(ActionTypes.NEW_GAME_INIT, initGame, store);
    yield takeLatest(ActionTypes.END_GAME, endGame, store);
    yield takeLatest(ActionTypes.SET_DIFFICULTY, setDifficulty);
}
