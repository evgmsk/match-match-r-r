/**
 * project match-match-r-r
 */
const Storage = window.localStorage;

export const saveRec = (name, record) => {
    if (!Storage.Players)
        throw (new Error('No Players'));
    const Players = JSON.parse(Storage.Players);
    const Player = Players.filter(player => player.name === name)[0];
    Player.records[record.difficulty] = record.time;
    Storage.setItem('Players', JSON.stringify(Players));
};

export const fetchRecords = (players) => {
    const Players = Storage.Players ? JSON.parse(Storage.Players) : [];
    Players.forEach((player, i) => {
        players[i] = player;
    });
};

export const compareRecords = (a, b, i = 0) => {
    const res = a.records[i] - b.records[i];
    return !res && i < a.records.length - 1 ? compareRecords(a, b, i + 1) : res;
};
