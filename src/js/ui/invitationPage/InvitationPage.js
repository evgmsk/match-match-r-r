/**
 * project match-match-r-r
 */
import React from 'react';
import PropTypes from 'prop-types';

import InvitationContent from './invitation/InvitationContent';
import './invitationPage.scss';

class Invitation extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        e.stopPropagation();
        this.props.history.push('/login');
    }
    render() {
        return (
            <section className="invitation">
                <InvitationContent onClick={this.onClick} />
            </section>
        );
    }
}


Invitation.propTypes = {
    history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Invitation;
