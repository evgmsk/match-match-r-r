/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import { MaxTime } from '../../../constants/constants';

const RecordTableSell = props => {
    return (
        <div className="table-row difficulty-level">
            {props.record < MaxTime ? props.record : 'No data'}
        </div>
    );
};

export default RecordTableSell;

RecordTableSell.propTypes = {
    record: PropTypes.number.isRequired,
};

