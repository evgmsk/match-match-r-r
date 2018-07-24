/**
 * project match-match-r-r
 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './AppRoute';
import Header from './Header';
import Spinner from './ui/OnloadDataSpinner/SpinnerUI';
import './startPage.scss';

const StartPage = props => {
    return (
        <div>
            {props.app.dataLoaded ? <div className="display-none" /> : <Spinner />}
            <HashRouter>
                <div>
                    <div className="start-page-wrapper" >
                        <Header />
                        <ContentRoute />
                    </div>
                </div>
            </HashRouter>
        </div>
    );
};

export default StartPage;