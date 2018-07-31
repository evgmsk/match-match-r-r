/**
 * project match-match-r-r
 */
import React, { Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppRoute from './appRoute';
import Header from './ui/header/Header';
import Footer from './ui/footer/Footer';
import Spinner from './ui/onloadDataSpinner/SpinnerUI';
import './app.scss';

const App = props => {
    console.log(props);
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

export default connect(
    state => ({
        dataLoading: state.app.dataLoading,
    }),
)(App);

App.propTypes = {
    dataLoading: PropTypes.bool.isRequired,
};
