/**
 * project match-match-r-r
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './recordsTableRow.scss';

import '../../containers/recordsPage/recordsPage.scss';

const RecordsPageRow = props => {
    const { player } = props;
    return (
        <Fragment>
            <div className="table-row player-name">
                <span>${player.name}</span>
            </div>
            <div className="table-row difficulty-level">
                <span>${player.score[0]}</span>
            </div>
            <div className="table-row difficulty-level">
                <span>${player.score[1]}</span>
            </div>
            <div className="table-row difficulty-level">
                <span>${player.score[2]}</span>
            </div>
            <div className="table-row difficulty-level">
                <span>${player.score[3]}</span>
            </div>
        </Fragment>
    );
};

export default RecordsPageRow;

RecordsPageRow.propTypes = {
    player: PropTypes.objectOf(PropTypes.any).isRequired,
};
