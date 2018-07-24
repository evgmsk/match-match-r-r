/**
 * project match-match-r-r
 */
import { CardsSkirts } from './cardsUrls';

const GameMenuTitles = {
    NEW_PLAYER: {
        title: 'New Player',
        handler: true,
        hover: true,
        dropMenu: [],
    },
    SKIRT: {
        title: 'Card Skirt',
        handler: false,
        hover: true,
        dropMenu: [
            CardsSkirts.LebKuchen,
            CardsSkirts.NutsKnacker,
            CardsSkirts.SnowFlake,
        ],
    },
    TIMER: {
        title: 'Timer',
        handler: false,
        hover: false,
        dropMenu: [],
    },
    RECORDS: {
        title: 'Records',
        handler: true,
        hover: true,
        dropMenu: [],
    },
    NEW_GAME: {
        title: 'Records',
        handler: true,
        hover: true,
        dropMenu: [],
    },
    DIFFICULTY: {
        title: 'Records',
        handler: false,
        hover: true,
        dropMenu: [],
    },
};

export default GameMenuTitles;
