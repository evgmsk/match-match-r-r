/**
 * project match-match-r-r
 */
import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import ActionTypes from '../../actions/actionTypes';


function* workerTimer() {
    // The sagasMiddleware will start running timer generator.
    let count = 0;
    while (count < 3600) {
        count += 1;
        yield delay(1000);
        yield put({ type: ActionTypes.TICK });
    }
}

export default function* watcherTimer() {
    yield takeLatest(ActionTypes.START_TIMER, workerTimer);
}
