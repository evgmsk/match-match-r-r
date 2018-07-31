/**
 * project match-match-r-r
 */
import { all } from 'redux-saga/effects';
import watcherDeck from './watcherDeck';
import watcherTimer from './watcherTimer';

export default function* sagaRoot(store) {
    yield all([
        watcherDeck(store),
        watcherTimer(store),
    ]);
}
