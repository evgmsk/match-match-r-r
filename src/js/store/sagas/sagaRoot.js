/**
 * project match-match-r-r
 */
import { all } from 'redux-saga/effects';
import watcherDeck from './watcherDeck';
import watcherGame from './watcherGame';
import watcherCards from './watcherCards';
import watcherTimer from './watcherTimer';
import watcherPlayer from './watcherPlayer';


export default function* sagaRoot(store) {
    yield all([
        watcherCards(store),
        watcherDeck(store),
        watcherGame(store),
        watcherTimer(),
        watcherPlayer(store),
    ]);
}
