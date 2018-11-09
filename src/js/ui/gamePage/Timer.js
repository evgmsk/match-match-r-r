/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './timer.scss';

class Timer extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            time: 0,
        };
        this.inteval = null;
        this.timer = this.timer.bind(this);
    }


    componentDidUpdate(prevProps) {
        const { started } = this.props;
        if (started !== prevProps.started) {
            if (this.props.started) {
                this.startTimer();
            } else
                this.stopTimer();
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    timer() {
        const time = this.state.time + 1;
        this.setState({ time });
    }
    startTimer() {
        this.setState({ started: true });
        this.interval = setInterval(this.timer, Timeouts.timer);
    }
    stopTimer() {
        clearInterval(this.interval);
        this.setState({ time: 0, started: false });
    }*/
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
            <div className="game-timer">
                <span className="game-timer-title">Time: </span>
                <span className="game-timer-time">{time}</span>
            </div>
        );
    }
}

Timer.propTypes = {
    time: PropTypes.number.isRequired,
};

export default connect(
    state => ({
        time: state.time,
    }),
)(Timer);
