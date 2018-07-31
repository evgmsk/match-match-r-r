/**
 * project match-match.
 */
import { game } from '../game/gameClass';
import recordsHandler from './recordsHandler';

class MenuHandlers {
    constructor() {
        this.menuNode = document.getElementById('head-menu');
        this.eventFocusNodes = [
            document.getElementById('button-skirt'),
            document.getElementById('button-level'),
        ];
        this.eventBlurNodes = [
            game.skirtsNode,
            game.levelNode,
        ];
        this.onClickHandlers = {
            'new-game': game.newGame,
            'new-player': game.newPlayer,
            'records-button': recordsHandler.showRecords,
        };
        this.clickNodes = document.querySelectorAll('.menu-button');
        this.firedClass = 'dropped';
        this.blurDropMenu = this.blurDropMenu.bind(this);
        this.focusDropMenu = this.focusDropMenu.bind(this);
        this.clickOnMenuItem = this.clickOnMenuItem.bind(this);
        this.addListeners = this.addListeners.bind(this);
        this.removeListeners = this.removeListeners(this);
        this.keyDownMenuItem = this.keyDownMenuItem.bind(this);
    }

    focusDropMenu(e) {
        e.preventDefault();
        e.target.parentNode.classList.add(this.firedClass);
    }

    blurDropMenu(e) {
        e.preventDefault();
        e.target.parentNode.parentNode.classList.remove(this.firedClass);
    }

    clickOnMenuItem(e) {
        e.preventDefault();
        e.stopPropagation();
        const id = e.target.parentElement.id;
        if (this.onClickHandlers[id]) {
            this.onClickHandlers[id](id);
        } else if (e.target.parentElement.classList.contains('menu-button')) {
            e.target.parentElement.parentElement.classList.remove(this.firedClass);
            e.target.parentElement.blur();
        }
    }

    keyDownMenuItem(e) {
        e.stopPropagation();
        console.log(e, e.target);
        const id = e.target.id;
        if(e.keyCode === 13){
            if (this.onClickHandlers[id]) {
                this.onClickHandlers[id](id);
            }
        }
    }

    addListeners() {
        Object.keys(this.onClickHandlers).forEach(x => {
            document.getElementById(x).addEventListener('keydown', this.keyDownMenuItem)
        });
        this.menuNode.addEventListener('click', this.clickOnMenuItem);
        this.eventFocusNodes.forEach(x => {
            x.addEventListener('focus', this.focusDropMenu);
        });
        this.eventBlurNodes.forEach(x => {
            x.querySelector('.drop-item:last-of-type')
                .addEventListener('blur', this.blurDropMenu);
        });
    }

    removeListeners() {
        this.menuNode.removeEventListener('click', this.clickOnMenuItem);
        this.eventFocusNodes.forEach(x => {
            x.removeEventListener('focus', this.focusDropMenu);
        });
        this.eventBlurNodes.forEach(x => {
            x.querySelector('.drop-item:last-of-type')
                .removeEventListener('blur', this.blurDropMenu);
        });
    }

    setActiveMenuItems() {
        this.eventBlurNodes.forEach(x => {
            x.querySelector('.drop-item:nth-of-type(2)').classList.toggle('active-menu-item');
        });
    }
}

const menuHandler = new MenuHandlers();
export default menuHandler;
