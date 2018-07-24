/**
 * project match-match-r-r
 */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import player from './reducers/playerReducer';
import deck from './reducers/deckReducer';
import loginForm from './reducers/logFormReducer';
import game from './reducers/gameReducer';
import app from './reducers/appReducer';
import initialState from './initialState';
// import AT from '../actions/actionTypes';

const saver = store => next => action => {
    return next(action);
};

const reduxToolsExt = window.__REDUX_DEVTOOLS_EXTENSION__;

const storeFactory = (data = initialState) =>
    applyMiddleware(saver, createSagaMiddleware)(createStore)(
        combineReducers({ deck, player, loginForm, game, app }),
        data, reduxToolsExt && reduxToolsExt(),
    );

export default storeFactory;
