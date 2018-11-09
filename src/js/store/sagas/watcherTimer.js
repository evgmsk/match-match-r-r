/**
 * project match-match-r-r
 */
import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import ActionTypes from '../../actions/actionTypes';
import { Timeouts, MaxTime } from '../../constants/constants';

function* workerTimer(action) {
    let count = 0;
    while (action.payload && count < MaxTime) {
        count += 1;
        yield delay(Timeouts.timer);
        yield put({ type: ActionTypes.TICK });
    }
}

export default function* watcherTimer() {
    yield takeLatest(ActionTypes.START_TIMER, workerTimer);
}
