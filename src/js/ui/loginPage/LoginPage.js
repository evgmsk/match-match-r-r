/**
 * project WizBattle.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogForm from './logForm/LogForm';
import { onLoadData } from '../../actions/appActions';
import { loginPlayer, regPlayer } from '../../actions/playerActions';

import './loginPage.scss';

class LogPage extends React.Component {
    componentDidMount() {
        this.props.onLoadData(false);
    }
    render() {
        const { logFail } = this.props.player;
        let logPageTitle = 'Please login or register';
        if (logFail && logFail.name)
            logPageTitle = 'Please confirm registration of the new player or enter other name';
        return (
            <div className="log-page">
                <h2 className={logFail && 'error'}>{logPageTitle}</h2>
                <LogForm {...this.props} />
            </div>
        );
    }
}

export default connect(
    state => ({
        player: state.player,
    }),
    { onLoadData, regPlayer, loginPlayer },
)(LogPage);

LogPage.propTypes = {
    player: PropTypes.objectOf(String).isRequired,
    onLoadData: PropTypes.func.isRequired,
};
