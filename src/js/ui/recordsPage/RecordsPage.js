/**
 * project match-match-r-r
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecordsTableHead from '../records/RecordsTableHead';
import RecordsTableRow from '../records/RecordsTableRow';
import './recordsPage.scss';

const RecordsPage = props => {
    return (
        <section className="records-section">
            <h2>Records</h2>
            <div className="records-wrapper">
                <RecordsTableHead />
                {props.records.map(player => <RecordsTableRow {...player} />)}
            </div>

        </section>
    );
};

export default connect(
    state => ({
        records: state.app.totalRecords,
    }),
)(RecordsPage);

RecordsPage.propTypes = {
    records: PropTypes.arrayOf(PropTypes.any).isRequired,
};

