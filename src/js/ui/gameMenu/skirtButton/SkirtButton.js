/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSkirt } from '../../../actions/gameActions';

const SkirtButton = props => {
    const className = `skirt-item ${props.skirtName} ${props.skirt === props.skirtName && 'active'}`;
    const onClick = e => {
        e.preventDefault();
        e.stopPropagation();
        props.setSkirt(props.skirtName);
    };
    const onKeyDown = e => {
        e.stopPropagation();
        if (e.key === 'Enter' || e.key === 'Space')
            props.setSkirt(props.skirtName);
    };
    return (
        <button
            className={className}
            onClick={onClick}
            onKeyDown={onKeyDown}
        />
    );
};

SkirtButton.propTypes = {
    skirt: PropTypes.string.isRequired,
    skirtName: PropTypes.string.isRequired,
    setSkirt: PropTypes.func.isRequired,
};

export default connect(
    state => ({
        skirt: state.game.skirt,
    }),
    { setSkirt },
)(SkirtButton);
