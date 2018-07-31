/**
 * project match-match-r-r
 */
const InitialState = {
    player: {
        userName: '',
        userId: 0,
        records: [],
    },
    game: {
        deck: [],
        deckDrawing: false,
        difficulty: 'medium',
        skirt: 'lebkuchen',
        showedCard: null,
        timeout: false,
        newGame: false,
        started: false,
        time: 0,
    },
    app: {
        totalRecords: [],
        dataLoading: true,
    },
};

export default InitialState;
