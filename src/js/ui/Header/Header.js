/**
 * project match-match-r-r
 */
import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
//import { connect } from 'react-redux';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <MainMenu />
        </header>
    );
};

export default Header
