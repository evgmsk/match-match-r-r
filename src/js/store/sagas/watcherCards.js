/**
 * project match-match-r-r
 */
import { put, takeLatest, delay } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import ActionTypes from '../actions/actionTypes';
import { Timeouts } from '../../constants/constants';

function* workerCards(store, action) {
    const { deck } = store.getState();
    const cardsOnDesk = deck.filter(x => x.onDesk);
    const openedCard = cardsOnDesk.filter(x => x.opened)[0];
    const { cardId, face } = action.payload;
    yield put({ type: ActionTypes.SET_TIMEOUT, payload: true });
    yield put({ type: ActionTypes.OPEN_CARD, payload: cardId });
    yield delay(Timeouts.openCard);
    if (openedCard) {
        if (openedCard.face === face) {
            yield put({ type: ActionTypes.HIDE_CARD, payload: cardId });
            yield put({ type: ActionTypes.HIDE_CARD, payload: openedCard.cardId });
            yield delay(Timeouts.hideCard);
            if (cardsOnDesk.length === 2) {
                yield put({ type: ActionTypes.END_GAME });
            }
        } else {
            yield put({ type: ActionTypes.CLOSE_CARD, payload: cardId });
            yield put({ type: ActionTypes.CLOSE_CARD, payload: openedCard.cardId });
        }
    }
    yield put({ type: ActionTypes.SET_TIMEOUT, payload: false });
}

export default function* watcherCards(store) {
    yield takeLatest(ActionTypes.CHOOSE_CARD, workerCards, store);
}
