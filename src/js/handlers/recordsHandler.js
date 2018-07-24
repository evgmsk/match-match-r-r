/**
 * project match-match.
 */
import { Storage, Players } from '../game/constants';
import { game } from '../game/gameClass';

class GameRecords {
    constructor() {
        this.node = document.getElementById('records-wrapper');
        this.tableHead = `
        <div class="player-name-head">
            <span>Player Name</span>
        </div>
        <div class="player-records-head">
            <span>Player Records</span>
        </div>
        <div class="difficulty-level-head">
            <span>Low</span>
        </div>
        <div class="difficulty-level-head">
            <span>Medium</span>
        </div>
        <div class="difficulty-level-head">
            <span>High</span>
        </div>
        <div class="difficulty-level-head">
            <span>Ultimate</span>
        </div>
        `;
        this.closeRecords = this.closeRecords.bind(this);
        this.showRecords = this.showRecords.bind(this);
    }

    insertTableRow(player) {
        this.node.insertAdjacentHTML(
            'beforeend',
            `
            <div class="player-name">
                <span>${player.name}</span>
            </div>
            <div class="difficulty-level">
                <span>${player.score[0]}</span>
            </div>
            <div class="difficulty-level">
                <span>${player.score[1]}</span>
            </div>
            <div class="difficulty-level">
                <span>${player.score[2]}</span>
            </div>
            <div class="difficulty-level">
                <span>${player.score[3]}</span>
            </div>
            `,
        );
    }

    drawRecordsTable() {
        let records = JSON.parse(Storage[Players]).map(x => ({
            name: `${x.firstName} ${x.lastName}`,
            score: Object.values(x.score),
        }));
        records = records.sort((a, b) => {
            if (a.score[3] - b.score[3])
                return a.score[3] - b.score[3];
            else if (b.score[2] - a.score[2])
                return a.score[2] - b.score[2];
            else if (b.score[1] - a.score[1])
                return a.score[1] - b.score[1];
            return a.score[0] - b.score[0];
        }).slice(0, 10);
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'records-wrapper');
        this.node.insertAdjacentHTML('beforeend', this.tableHead);
        records.forEach(x => {
            this.insertTableRow(x);
        });

        const closeButton = document.createElement('button');
        closeButton.setAttribute('id', 'close-records');
        closeButton.classList.add('records-close-button');
        closeButton.innerHTML = 'Close Records';
        closeButton.addEventListener('click', this.closeRecords);
        this.node.appendChild(closeButton);
    }

    showRecords(e) {
        e.preventDefault();
        e.stopPropagation();
        game.gameClose();
        this.drawRecordsTable();
        this.node.parentNode.style.display = 'flex';
    }

    closeRecords(e) {
        e.preventDefault();
        e.stopPropagation();
        this.node.parentNode.style.display = 'none';
        game.clearDesk(this.node);
        game.gameInit();
    }

    addListener() {
        document.getElementById('records-button').addEventListener('click', this.showRecords);
    }

    removeListener() {
        document.getElementById('records-button').removeEventListener('click', this.showRecords);
    }
}

const recordsHandler = new GameRecords();
export default recordsHandler;
