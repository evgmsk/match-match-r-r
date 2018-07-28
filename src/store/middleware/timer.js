/**
 * project match-match-r-r
 */
import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga/utils';
import { tick } from '../../js/actions/gameActions';
import ActionTypes from '../../js/actions/actionTypes';

const defineTime = timer => {
    let time = timer.time;
    time[0] += 1;
    if (time[0] === 60) {
        time[1] += 1;
        time[0] = 0;
    }
    if (time[1] === 60) {
        time = [0, 0];
    }
};

function* workerTimer(store) {
    // The sagasMiddleware will start running timer generator.
    while (store.getState().timer.started) {
        const timer = store.getState().timer;
        const time = defineTime(timer);
        yield delay(1000);
        yield put(tick(time));
    }
}

export default function* watcherTimer(store) {
    console.log();
    yield takeLatest(ActionTypes.START_TIMER, () => workerTimer(store));
}
