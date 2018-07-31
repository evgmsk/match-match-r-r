/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setDifficulty } from '../../../actions/gameActions';

const LevelButton = props => {
    const className = `level-item ${props.difficulty === props.value && 'active'}`;
    const onClick = e => {
        e.preventDefault();
        e.stopPropagation();
        props.setDifficulty(props.value);
    };
    const onKeyDown = e => {
        e.stopPropagation();
        if (e.key === 'Enter' || e.key === 'Space')
        props.setDifficulty(props.value);
    };
    return (
        <button
            className={className}
            onClick={onClick}
            onKeyDown={onKeyDown}
        >{props.value}
        </button>
    );
};

LevelButton.propTypes = {
    difficulty: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setDifficulty: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        difficulty: state.game.difficulty,
    }),
    { setDifficulty },
)(LevelButton);
