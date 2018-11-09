/**
 * project match-match-r-r
 */
import { call, put, takeLatest } from 'redux-saga/effects';
import ActionTypes from '../../actions/actionTypes';
import { loginPlayer, newPlayer } from '../../helperFunction/loginPlayer';
import { saveRec, fetchRecords } from '../../helperFunction/manageRecords';

function* logPlayer(store, action) {
    const res = yield call(loginPlayer, action.payload);
    if (res === 'Player logged') {
        yield put({ type: ActionTypes.SET_PLAYER, payload: action.payload });
    } else
        yield put({ type: ActionTypes.REGISTRATION_OR_LOG_FAIL, payload: action.payload });
}

function* regPlayer(action) {
    yield put({ type: ActionTypes.REGISTRATION_OR_LOG_FAIL, payload: null });
    yield call(newPlayer, action.payload);
    yield put({ type: ActionTypes.DATA_LOADING, payload: true });
    yield put({ type: ActionTypes.SET_PLAYER, payload: { name: action.payload.name } });
}

function* saveRecord(store, action) {
    yield call(saveRec, store.getState().player.name, action.payload);
}

function* getRecords(action) {
    yield call(fetchRecords, action.payload);
}

export default function* watcherPlayer(store) {
    yield takeLatest(ActionTypes.LOGIN_PLAYER, logPlayer, store);
    yield takeLatest(ActionTypes.REG_PLAYER, regPlayer);
    yield takeLatest(ActionTypes.SAVE_RECORD, saveRecord, store);
    yield takeLatest(ActionTypes.GET_RECORDS, getRecords);
}
