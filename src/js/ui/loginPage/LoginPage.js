/**
 * project WizBattle.
 */
import React from 'react';
import PropTypes from 'prop-types';
import LogForm from './logForm/LogForm';
import './loginPage.scss';

const LogPage = () => {
    return (
        <div className="log-page">
            <h2>Please login</h2>
            <LogForm />
        </div>
    );
};

export default LogPage;

LogPage.propTypes = {
};
