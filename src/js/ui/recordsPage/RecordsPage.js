/**
 * project match-match-r-r
 */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecordsTableHead from './records/RecordsTableHead';
import RecordsTableRow from './records/RecordsTableRow';
import { onLoadData } from '../../store/actions/appActions';
import { Levels, MaxTime } from '../../constants/constants';
import { compareRecords } from '../../helperFunction/manageRecords';
import './recordsPage.scss';

class RecordsPage extends React.Component {
    componentDidMount() {
        this.props.onLoadData(false);
    }
    render() {
        let { records } = this.props;
        if (records.length) {
            records = records.map(rec => ({
                name: rec.name,
                records: Levels.map(level => rec.records[level] || MaxTime),
            }));
            records.sort(compareRecords);
        }
        return (
            <section className="records-section">
                <h2>Records</h2>
                <div className="records-wrapper">
                    <RecordsTableHead />
                    <div className="records-table-body">
                        {records.map((player, i) =>
                            <RecordsTableRow
                                key={i.toString()}
                                player={this.props.playerName}
                                {...player}
                            />)}
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(
    state => ({
        playerName: state.player.name,
        records: state.app.totalRecords,
    }),
    { onLoadData },
)(RecordsPage);

RecordsPage.propTypes = {
    playerName: PropTypes.string.isRequired,
    onLoadData: PropTypes.func.isRequired,
    records: PropTypes.arrayOf(PropTypes.any).isRequired,
};

