/**
 * project match-match-r-r
 */
const Storage = window.localStorage;

export const newPlayer = (player) => {
    const allPlayers = Storage.Players ? JSON.parse(Storage.Players) : [];
    player.records = {};
    allPlayers.push(player);
    Storage.setItem('Players', JSON.stringify(allPlayers));
};

export const loginPlayer = (player) => {
    return new Promise((resolve) => {
        const allPlayers = Storage.Players ? JSON.parse(Storage.Players) : [];
        const oldPlayer = allPlayers.filter(old => old && old.name === player.name)[0];
        if (!oldPlayer) {
            return resolve('Confirm new player registration');
        }
        return resolve('Player logged');
    });
};
