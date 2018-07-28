/**
 * project match-match-r-r
 */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
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
        <div>
            {props.dataLoading && <Spinner />}
            <BrowserRouter>
                <div className="app-wrapper" >
                    <Header />
                    <AppRoute />
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
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
