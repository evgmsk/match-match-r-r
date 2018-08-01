/**
 * project match-match-r-r
 */
import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { tick } from '../../actions/gameActions';
import ActionTypes from '../../actions/actionTypes';


function* workerDeck(deck) {
    // The sagasMiddleware will start running timer generator.
    let deckLength = deck.length;
    while (deckLength) {
        deckLength -= 1;
        yield delay(200);
        yield put({ type: ActionTypes.DRAW_CARD, payload: deckLength });
    }
}

export default function* watcherDeck(store) {
    yield takeLatest(ActionTypes.DRAWING_DECK, () => workerDeck(store.getState().game.deck));
    // yield takeLatest(ActionTypes.OPEN_CARD, () => console.log('ff'));
}
