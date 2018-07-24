/**
 * project match-match-r-r
 */
import React from 'react';
import './gameMenu.scss';

const GameMenu = props => {
    return (
        <div id="head-menu" className="head-menu">
            <div class="menu-list player-menu">
                <a href="" id="new-player" class="menu-item menu-button">
                    <h2>New Player</h2>
                </a>
                <div class="menu-item">
                    <a href="" id="button-skirt" class="menu-button" >
                        <h2>Skirt cards</h2>
                    </a>
                    <div id="menu-skirts" class="drop-menu-list">
                        <button class="drop-item skirt-item" name="NutsKnacker">
                        </button>
                        <button class="drop-item skirt-item" name="LebKuchen">
                        </button>
                        <button class="drop-item skirt-item" name="SnowFlake">
                        </button>
                    </div>
                </div>
            </div>
            <div class="menu-list timer-menu">
                <a href="" id="timer" class="menu-item menu-button">
                    <h2>
                        Timer:
                        <span class="timer">00:00</span>
                    </h2>
                </a>
                <a href="" id="records-button" class="menu-item menu-button">
                    <h2>Records</h2>
                </a>
            </div>
            <div class="menu-list game-menu">
                <a href="" id="new-game" class="menu-item menu-button">
                    <h2>New Game</h2>
                </a>
                <div class="menu-item">
                    <a id="button-level" class="menu-button" href="#"><h2>Game level</h2></a>
                    <div id="menu-level" class="drop-menu-list">
                        <button class="drop-item" value="3">
                            Low
                        </button>
                        <button class="drop-item" value="6">
                            Medium
                        </button>
                        <button class="drop-item" value="12">
                            High
                        </button>
                        <button class="drop-item" value="18">
                            Ultimate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GameMenu;

GameMenu.propTypes = {

};
