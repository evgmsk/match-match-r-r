/**
 * project match-match-r-r
 */
import React from 'react';
// import { connect } from 'react-redux';
import LevelButtonsWrapper from './levelButton/LevelButtonsWrapper';
import SkirtButtonsWrapper from './skirtButton/SkirtButtonsWrapper';
import NewGameButton from './gameMenuButton/NewGameButton';
import './gameMenu.scss';

const GameMenu = () => {
    return (
        <div className="game-menu-wrapper">
            <SkirtButtonsWrapper />
            <NewGameButton />
            <LevelButtonsWrapper />
        </div>
    );
};

export default GameMenu;

GameMenu.propTypes = {

};
/*
 .menu-item {
 position: relative;
 text-align: center;
 height: 4rem;
 padding: 0.3rem 0.5rem;
 background: $border-main;
 @extend %inset-shadow;
 border: none;
 border-radius: 5rem;
 margin: .5rem;
 color: $ice;
 font: $font-main;
 .drop-menu-title {
 color: $ice;
 font: $font-main;
 background: none;
 border: none;
 line-height: 4rem;
 }
 @media (min-width: 900px) {
 width: 13rem;
 }
 @media (min-width: 1200px) {
 width: 15rem;
 }
 &.menu-button:focus,
 &.menu-button:hover {
 color: $menu-item-focus;
 cursor: pointer;
 }
 .skirt-item {
 width: 5rem;
 transition: all .4s;
 }
 &:focus,
 &:hover {
 @extend %drop-menu-list;
 }
 }
 @each $skirt in $skirts {
 .skirt-item.#{$skirt} {
 background: url('#{$deepImgPath}/skirts/x-mas-#{$skirt}.jpg') no-repeat center/100%;
 }
 }

 .drop-menu-list{
 @include flex(center, center, column);
 position: absolute;
 top: 4rem;
 background: lighten($border-main, 5%);
 z-index: 2;
 width: 12rem;
 height: 0;
 border-radius: 5rem;
 transition: height .5s;
 @extend %inset-shadow;
 @media (min-width: 900px) {
 width: 13rem;
 }
 @media (min-width: 1200px) {
 width: 15rem;
 }
 }

 .drop-item {
 position: relative;
 @include flex();
 transform: scale(0);
 opacity: 0;
 transition: all .4s;
 border: none;
 border-radius: 5px;
 background: transparent;
 font-size: 2rem;
 color: $menu-item-color;
 line-height: 0;
 &:focus,
 &:hover {
 @extend  %drop-item-hover;
 }
 &.active {
 @extend %drop-item-active;
 }
 &.skirt-item.active {
 @extend %skirt-item-active;
 }
 &.skirt-item:focus,
 &.skirt-item:hover {
 @extend %skirt-item-hover;
 }
 }*/