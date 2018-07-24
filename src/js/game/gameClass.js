/**
 * project match-match.
 */
import Deck from '../cards/deckClass';
import { Storage, Players, HeadMenu, MainContainer } from './constants';
import RegistrationForm from '../handlers/formControls';

export class Game extends Deck {
    constructor(deck) {
        super(deck);
        if (Game.instance) {
            return Game.instance;
        }
        this.player = null;
        this.time = [0, 0];
        this.timerInterval = null;
        this.openedCards = [];
        this.cardsOut = 0;
        this.deskClasses = '';
        this.deskNode = document.getElementById('game-desk');
        this.timerNode = document.getElementById('timer').querySelector('.timer');
        this.skirtsNode = document.getElementById('menu-skirts');
        this.levelNode = document.getElementById('menu-level');
        this.eventQueue = false;
        this.cardDistributionInterval = 200;
        this.cardAnimationDuration = 500;
        this.timer = this.timer.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.clickOnCard = this.clickOnCard.bind(this);
        this.selectCard = this.selectCard.bind(this);
        this.setLevel = this.setLevel.bind(this);
        this.setSkirts = this.setSkirts.bind(this);
        this.newPlayer = this.newPlayer.bind(this);
        this.newGame = this.newGame.bind(this);
        this.gameInit = this.gameInit.bind(this);
        this.gameClose = this.gameClose.bind(this);
        Game.instance = this;
    }

    gameInit(player) {
        this.player = player || this.player;
        this.deskNode.parentNode.style.display = 'flex';
        HeadMenu.style.zIndex = 1;
        HeadMenu.style.opacity = 1;
        MainContainer.classList.add('big-panda');
    }

    gameClose() {
        this.deskNode.parentNode.style.display = 'none';
        HeadMenu.style.zIndex = -10;
        HeadMenu.style.opacity = 0;
        MainContainer.classList.remove('big-panda');
    }

    deskGridClasses() {
        switch (this.level) {
            case 18:
                return 'nine-to-four';
            case 12:
                return 'eight-to-three';
            case 6:
                return 'four-to-three';
            case 3:
                return 'three-to-two';
            default: return '';
        }
    }

    timer() {
        this.time[0] += 1;
        if (this.time[0] === 60) {
            this.time[1] += 1;
            this.time[0] = 0;
        }
        if (this.time[1] === 60) {
            this.time = [0, 0];
            clearInterval(this.timerInterval);
        }
        this.timerNode.textContent = this.setTime();
    }

    setTime() {
        return this.time.reduce((acc, x, i) => {
            const val = String(x);
            if (!i) {
                acc = val.length > 1 ? `${val}` : `0${val}`;
            } else
                acc = val.length > 1 ? `${val}:${acc}` : `0${val}:${acc}`;
            return acc;
        }, '');
    }

    startTimer() {
        setTimeout(() => { this.eventQueue = false; }, 100);
        this.timerInterval = setInterval(this.timer, 1000);
    }

    newPlayer() {
        if (this.eventQueue)
            return;
        clearInterval(this.timerInterval);
        this.clearDesk();
        this.time = [0, 0];
        this.gameClose();
        RegistrationForm.showRegForm();
    }

    setLevel(e) {
        if (this.eventQueue)
            return;
        e.preventDefault();
        e.stopPropagation();
        const level = parseInt(e.target.value, 10);
        if (level === this.level)
            return;
        this.levelNode.querySelector('.active-menu-item').classList.remove('active-menu-item');
        e.target.classList.add('active-menu-item');
        super.setLevel(level);
        this.startGame();
    }

    setSkirts(e) {
        if (this.eventQueue)
            return;
        e.preventDefault();
        e.stopPropagation();
        if (e.target.classList.contains('active-menu-item'))
            return;
        this.skirtsNode.querySelector('.active-menu-item').classList.toggle('active-menu-item');
        e.target.classList.toggle('active-menu-item');
        super.setSkirts(e.target.name);
    }

    moveBackForward(id, back = false) {
        const direction = back;
        let next = back ? parseInt(id, 10) + 1 : id - 1;
        if (next === -1)
            next = this.deck.length - 1;
        if (next === this.deck.length)
            next = 0;
        if (this.deck[next].face)
            this.moveBackForward(next, direction);
        else {
            document.getElementById(String(next)).focus();
        }
    }

    selectCard(e) {
        if (this.eventQueue.length)
            return;
        e.stopPropagation();
        const targetCard = e.target;
        if (e.keyCode === 13) {
            e.preventDefault();
            this.resolvePickedCard(targetCard);
        }
        if (e.keyCode === 37) {
            this.moveBackForward(e.target.id, true)
        }
        if (e.keyCode === 39) {
            this.moveBackForward(e.target.id)
        }
    }

    clickOnCard(e) {
        if (this.eventQueue.length)
            return;
        e.preventDefault();
        e.stopPropagation();
        const targetCard = e.target.parentElement.parentElement;
        if (targetCard.classList.contains('card-container'))
            this.resolvePickedCard(targetCard);
    }

    gameCard() {
        if (this.openedCards[0].cardName === this.openedCards[1].cardName) {
            this.openedCards[0].removeCard();
            this.openedCards[1].removeCard();
            this.cardsOut += 2;
            if (this.cardsOut === this.deck.length)
                this.fin();
        }
        if (this.openedCards[0].cardName !== this.openedCards[1].cardName) {
            this.openedCards[0].openCard();
            this.openedCards[1].openCard();
        }
        this.openedCards.length = 0;
    }

    resolvePickedCard(targetCard) {
        const pickedCard = this.deck.filter(x => x.cardId === targetCard.id)[0];
        if (pickedCard.face || this.openedCards[1]) {
            return;
        }
        pickedCard.openCard();
        if (!this.openedCards[0]) {
            this.openedCards.push(pickedCard);
            return;
        }
        this.openedCards.push(pickedCard);
        setTimeout(() => this.gameCard(), this.cardAnimationDuration);
    }

    clearDesk(node = this.deskNode) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }

    newGame() {
        if (this.eventQueue)
            return;
        this.startGame();
    }

    startGame() {
        this.eventQueue = true;
        clearInterval(this.timerInterval);
        MainContainer.classList.remove('big-panda');
        this.time = [0, 0];
        this.timerNode.textContent = this.setTime();
        this.cardsOut = 0;
        this.clearDesk();
        this.newDeck();
        this.drawDeck(this.deskNode);
        if (this.deskClasses && this.deskClasses !== this.deskGridClasses()) {
            this.deskNode.classList.remove(this.deskClasses);
            this.deskNode.classList.add(this.deskGridClasses());
        }
        if (!this.deskClasses) {
            this.deskNode.classList.add(this.deskGridClasses());
        }
        this.deskClasses = this.deskGridClasses();
        setTimeout(this.startTimer, this.level * this.cardDistributionInterval);
    }

    fin() {
        clearInterval(this.timerInterval);
        this.clearDesk();
        const result = (this.time[1] * 60) + this.time[0];
        this.player.setScore(this.level, result);
        const allPlayers = JSON.parse(Storage[Players])
            .map(p => {
                if (p.email === this.player.email)
                    return this.player.getProperties();
                return p;
            });
        Storage.setItem(Players, JSON.stringify(allPlayers));
        MainContainer.classList.add('big-panda');
    }

    addListeners() {
        this.deskNode.addEventListener('click', this.clickOnCard);
        this.deskNode.addEventListener('keydown', this.selectCard);
        this.skirtsNode.addEventListener('click', this.setSkirts);
        this.levelNode.addEventListener('click', this.setLevel);
    }

    removeListener() {
        this.deskNode.removeEventListener('click', this.clickOnCard);
        this.deskNode.removeEventListener('keydown', this.selectCard);
        this.skirtsNode.removeEventListener('click', this.setSkirts);
        this.levelNode.removeEventListener('click', this.setLevel);
    }
}

export const game = new Game();
