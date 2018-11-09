/**
 * project match-match-r-r
 */
const InitialState = {
    player: {
        name: '',
        records: {},
        logFail: null,
    },
    deck: [],
    time: 0,
    game: {
        difficulty: 'medium',
        bigPanda: true,
        skirt: 'lebkuchen',
        timeout: false,
        started: false,
    },
    app: {
        totalRecords: [],
        dataLoading: true,
    },
};

export default InitialState;
