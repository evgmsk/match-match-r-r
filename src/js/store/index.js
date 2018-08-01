/**
 * project match-match-r-r
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import player from './reducers/playerReducer';
import game from './reducers/gameReducer';
import app from './reducers/appReducer';
import initialState from './initialState';
import sagaRoot from './sagas/sagaRoot';
// import AT from '../actions/actionTypes';

const saver = store => next => action => {
    return next(action);
};
const sagaMiddleware = createSagaMiddleware();
const reduxToolsExt = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const storeFactory = (data = initialState) => {
    const store = applyMiddleware(saver, sagaMiddleware)(createStore)(
        combineReducers({ player, game, app }),
        data, reduxToolsExt,
    );
    sagaMiddleware.run(() => sagaRoot(store));
    return store;
};


 export default storeFactory;
