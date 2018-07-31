/**
 * project match-match-r-r
 */
import React, { Fragment }from 'react';
import './recordsTablleHead.scss';

const RecordsTableHead = () => {
    return (
        <Fragment>
            <div className="table-head player-name">
                <span>Player Name</span>
            </div>
            <div className="table-head player-records">
                <span>Player Records</span>
            </div>
            <div className="table-head difficulty-level">
                <span>Low</span>
            </div>
            <div className="table-head difficulty-level">
                <span>Medium</span>
            </div>
            <div className="table-head difficulty-level">
                <span>High</span>
            </div>
            <div className="table-head difficulty-level">
                <span>Ultimate</span>
            </div>
        </Fragment>
    );
};

export default RecordsTableHead;
