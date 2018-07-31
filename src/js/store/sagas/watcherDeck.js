/**
 * project match-match-r-r
 */
import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { tick } from '../../actions/gameActions';
import ActionTypes from '../../actions/actionTypes';


function* workerDeck({store}) {
    // The sagasMiddleware will start running timer generator.
    console.log(arguments);
    let deckLength = store.getState().deck.length;
    while (deckLength) {
        deckLength -= 1;
        yield delay(200);
        yield put(tick(time));
    }
}

export default function* watcherDeck() {
    yield takeLatest(ActionTypes.DECK_DRAWING, workerDeck);
}
