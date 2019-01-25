/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { onLoadData } from '../../actions/appActions';
import InvitationContent from './invitation/InvitationContent';
import './invitationPage.scss';

class Invitation extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        this.props.onLoadData(false);
    }
    onClick(e) {
        e.stopPropagation();
        this.props.history.push('/login');
    }
    render() {
        console.log(this.props.location, this.props)
        return (
            <section className="invitation">
                <InvitationContent onClick={this.onClick} />
            </section>
        );
    }
}


Invitation.propTypes = {
    onLoadData: PropTypes.func.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(
    null,
    dispatch => ({
        onLoadData(bool) {
            dispatch(onLoadData(bool));
        },
    }),
)(Invitation);
