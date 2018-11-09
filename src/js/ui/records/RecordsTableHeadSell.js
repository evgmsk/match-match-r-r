/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';

const RecordTableSell = ({ level }) => {
    return (
        <div className="table-head difficulty-level">
            {level}
        </div>
    );
};

RecordTableSell.propTypes = {
    level: PropTypes.string.isRequired,
};

export default RecordTableSell;
