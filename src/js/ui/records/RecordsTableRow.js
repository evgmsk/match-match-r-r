/**
 * project match-match-r-r
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RecordTableSell from './RecordTableSell';
import './recordsTableRow.scss';
import '../recordsPage/recordsPage.scss';

const RecordsTableRow = props => {
    const { name, records } = props;
    return (
        <Fragment>
            <div className="table-row player-name">
                {props.player && props.player === name ? `${name} (You)` : name}
            </div>
            {records.map((record, i) =>
                <RecordTableSell record={record} key={i.toString()} />)}
        </Fragment>
    );
};

export default RecordsTableRow;

RecordsTableRow.propTypes = {
    player: PropTypes.string,
    name: PropTypes.string.isRequired,
    records: PropTypes.arrayOf(PropTypes.any).isRequired,
};

RecordsTableRow.defaultProps = {
    player: '',
};
