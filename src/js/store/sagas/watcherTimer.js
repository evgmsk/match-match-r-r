/**
 * project match-match-r-r
 */
import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { tick } from '../../actions/gameActions';
import ActionTypes from '../../actions/actionTypes';


function* workerTimer({store}) {
    // The sagasMiddleware will start running timer generator.
    console.log(store);
    while (store.getState().game.started) {
        let time = store.getState().time;
        time += 1;
        yield delay(1000);
        if (time === 3600)
            break;
        yield put(tick(time));
    }
}

export default function* watcherTimer() {
    yield takeLatest(ActionTypes.START_TIMER, workerTimer);
}
