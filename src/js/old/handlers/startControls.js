/**
 * project match-match.
 */
import RegistrationForm from './formControls';

class RulesControls {
    constructor(nodeId) {
        const { id = 'invitation' } = nodeId || {};
        this.node = document.getElementById(id);
        this.rulesClose = this.rulesClose.bind(this);
        this.inviteClose = this.inviteClose.bind(this);
    }
    rulesClose(e) {
        e.preventDefault();
        e.stopPropagation();
        this.node.classList.add('hide-invitation');
    }

   inviteClose(e) {
        e.preventDefault();
        e.stopPropagation();
        this.node.classList.add('hide-invitation');
        this.node.querySelector('#invitation-button')
            .removeEventListener('click', this.inviteClose);
        this.node.querySelector('#invitation-button')
            .addEventListener('click', this.rulesClose);
        RegistrationForm.showRegForm();
    }

    addListeners() {
        this.node.querySelector('#invitation-button').addEventListener('click', this.inviteClose);
    }
}

const startControls = new RulesControls();

export default startControls;
