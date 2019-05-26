/**
 * project match-match-r-r
 */
import { put, takeLatest, delay } from 'redux-saga/effects';
import ActionTypes from '../actions/actionTypes';
import { Timeouts } from '../../constants/constants';

function* workerDeck({ payload }) {
    // The sagasMiddleware will start running timer generator.
    let deckLength = payload.length;
    while (deckLength) {
        deckLength -= 1;
        yield delay(Timeouts.drawCard);
        yield put({ type: ActionTypes.DRAW_CARD, payload: payload[deckLength] });
    }
    yield put({ type: ActionTypes.START_TIMER, payload: true });
    yield put({ type: ActionTypes.SET_TIMEOUT, payload: false });
}

export default function* watcherDeck() {
    yield takeLatest(ActionTypes.SET_DECK, workerDeck);
}
