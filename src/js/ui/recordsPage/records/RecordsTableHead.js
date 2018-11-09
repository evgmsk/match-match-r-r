/**
 * project match-match-r-r
 */
import React, { Fragment } from 'react';
import RecordTableHeadSell from './RecordsTableHeadSell';
import { Levels } from '../../../constants/constants';
import './recordsTablleHead.scss';

const RecordsTableHead = () => {
    return (
        <div className="records-table-head">
            <div className="table-head player-name">
                Player Name
            </div>
            <div className="table-head player-records">
                Player Records
            </div>
            {Levels.map(level => <RecordTableHeadSell key={level} level={level} />)}
        </div>
    );
};

export default RecordsTableHead;
