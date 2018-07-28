/**
 * project match-match-r-r
 */
import React from 'react';
import './gameMenu.scss';

const GameMenu = props => {
    return (
        <div id="head-menu" className="head-menu">
            <div className="menu-list player-menu">
                <button id="new-player" className="menu-item menu-button">
                    <h2>New Player</h2>
                </button>
                <div className="menu-item">
                    <button id="button-skirt" className="menu-button" >
                        <h2>Skirt cards</h2>
                    </button>
                    <div id="menu-skirts" className="drop-menu-list">
                        <button className="drop-item skirt-item" name="NutsKnacker" />
                        <button className="drop-item skirt-item" name="LebKuchen" />
                        <button className="drop-item skirt-item" name="SnowFlake" />
                    </div>
                </div>
            </div>
            <div className="menu-list timer-menu">
                <button id="timer" className="menu-item menu-button">
                    <h2>
                        Timer:
                        <span className="timer">00:00</span>
                    </h2>
                </button>
                <button href="" id="records-button" className="menu-item menu-button">
                    <h2>Records</h2>
                </button>
            </div>
            <div className="menu-list game-menu">
                <button id="new-game" className="menu-item menu-button">
                    <h2>New Game</h2>
                </button>
                <div className="menu-item">
                    <button id="button-level" className="menu-button" href="#">
                        <h2>Game level</h2>
                    </button>
                    <div id="menu-level" className="drop-menu-list">
                        <button className="drop-item" value="3">
                            Low
                        </button>
                        <button className="drop-item" value="6">
                            Medium
                        </button>
                        <button className="drop-item" value="12">
                            High
                        </button>
                        <button className="drop-item" value="18">
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
