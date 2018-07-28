/**
 * match-match-game
 */
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/app';
import storeFactory from './store';
import timer from './store/middleware/timer';
import './index.scss';

window.React = React;
const store = storeFactory();
const target = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, target);
