/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Timer from '../../ui/gamePage/Timer';

class TimerContainer extends React.Component {
    shouldComponentUpdate(newProps) {
        return this.props.time !== newProps.time;
    }
    timeToString() {
        const { time } = this.props;
        let minutes = Math.round(time / 60).toString();
        let sec = (time % 60).toString();
        minutes = minutes.length > 1 ? minutes : `0${minutes}`;
        sec = sec.length > 1 ? sec : `0${sec}`;
        return `${minutes}:${sec}`;
    }
    render() {
        const time = this.timeToString();
        return (
            <Timer time={time} />
        );
    }
}

TimerContainer.propTypes = {
    time: PropTypes.number.isRequired,
};

export default connect(
    state => ({
        time: state.time,
    }),
)(TimerContainer);
