/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { onLoadData } from '../../actions/appActions';
import InvitionContent from '../../ui/invitation/InvitationContent';
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
        return (
            <section className="invitation">
                <InvitionContent onClick={this.onClick} />
            </section>
        );
    }
}


Invitation.propTypes = {
    onLoadData: PropTypes.func,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
};
Invitation.defaultProps = {
    onLoadData: f => f,
};

const InvitationPage = connect(
    null,
    dispatch => ({
        onLoadData(bool) {
            dispatch(onLoadData(bool));
        },
    }),
)(Invitation);

export default InvitationPage;
