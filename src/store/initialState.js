/**
 * project match-match-r-r
 */
const InitialState = {
    player: {
        userName: '',
        userId: 0,
        currentRecord: Infinity,
    },
    deck: [],
    timer: {
        started: false,
        time: [0, 0],
    },
    game: {
        difficulty: 'normal',
        skirt: 'x-mas-lebkuchen',
        showedCard: null,
        timeout: false,
    },
    app: {
        showInvitation: true,
        showForm: false,
        showDesk: false,
        totalRecords: [],
        loadingData: true,
    },
    loginForm: {
        nameValid: true,
        emailValid: true,
        passwordValid: true,
    },
};

export default InitialState;
