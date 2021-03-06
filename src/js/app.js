/**
 * project match-match-r-r
 */
import React, { Fragment, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppRoute from './appRoute';
import Header from './ui/header/Header';
import Footer from './ui/footer/Footer';
import Spinner from './ui/spinner/spinner';
import {onLoadData} from './store/actions/appActions';

import './app.scss';

const App = props => {
    useEffect(() => {
        props.onLoadData(false);
    },[]);
    return (
        <Fragment>
            {props.dataLoading && <Spinner />}
            <HashRouter>
                <div className="app-wrapper" >
                    <Header />
                    <AppRoute />
                    <Footer />
                </div>
            </HashRouter>
        </Fragment>
    );
};

export default connect(state => ({dataLoading: state.app.dataLoading}), {onLoadData})(App);

App.propTypes = {
    dataLoading: PropTypes.bool.isRequired,
};
