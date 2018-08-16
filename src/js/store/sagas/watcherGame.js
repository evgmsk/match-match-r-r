/**
 * project match-match-r-r
 */
import { put, takeLatest } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import _ from 'lodash';
import ActionTypes from '../../actions/actionTypes';
import { CardsFaces, LevelToNumber } from '../../constants/cards';

function* workerGame(difficulty) {
    // The sagasMiddleware will start running timer generator.
    yield put({ type: ActionTypes.RESET_TIME });
    yield put({ type: ActionTypes.SET_TIMEOUT });
    const num = LevelToNumber[difficulty];
    const cards = _.shuffle(CardsFaces).slice(0, num);
    let deck = cards.reduce((d, c) => {
        const card = {
            face: c,
            onDesk: true,
            opened: false,
        };
        d.push(card);
        return d;
    }, []);

    deck = _.shuffle([...deck, ...deck]);
    deck = deck.map((card, i) => ({ ...card, cardId: i }));
    yield put({ type: ActionTypes.DRAWING_DECK, payload: true });
    yield put({ type: ActionTypes.SET_DECK, payload: deck });
}

export default function* watcherGame(store) {
    yield takeLatest(ActionTypes.NEW_GAME_INIT, () => workerGame(store.getState().game.difficulty));
}
