/**
 * match-match-game
 */
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/app';
import storeFactory from './js/store';
import './index.scss';

window.React = React;
const store = storeFactory();
const target = document.getElementById('root');
// console.log(store.getState());
ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, target);
