/**
 * project match-match-r-r
 */
import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import ActionTypes from '../../actions/actionTypes';
import Timeouts from '../../constants/timeouts';

function* workerDeck({ payload }) {
    // The sagasMiddleware will start running timer generator.
    yield delay(Timeouts.openCard);
    yield put({ });
}

export default function* watcherDeck() {
    yield takeLatest(ActionTypes.SET_DECK, workerDeck);
}
