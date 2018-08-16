/**
 * project match-match-r-r
 */
const InitialState = {
    player: {
        userName: '',
        userId: 0,
        records: [],
    },
    deck: [],
    time: 0,
    game: {
        deckDrawing: false,
        difficulty: 'medium',
        skirt: 'lebkuchen',
        showedCard: null,
        timeout: false,
        started: false,
    },
    app: {
        totalRecords: [],
        dataLoading: true,
    },
};

export default InitialState;
