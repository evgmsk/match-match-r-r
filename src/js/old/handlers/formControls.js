/**
 * project match-match.
 */
import Player from '../game/playerClass';
import { game } from '../game/gameClass';
import { Storage, Players, EmailValid } from '../game/constants';

class RegistrationForm {
    constructor(form) {
        const {
            formId = 'reg-form-container',
            firstName = 'first-name',
            lastName = 'last-name',
            email = 'reg-form-email',
            submit = 'reg-form-submit',
        } = form || {};
        this.formId = document.getElementById(formId);
        this.firstName = document.getElementById(firstName);
        this.lastName = document.getElementById(lastName);
        this.email = document.getElementById(email);
        this.submit = document.getElementById(submit);
        this.showFormClass = 'show-form';
        this.formSubmit = this.formSubmit.bind(this);
        this.blurValidation = this.blurValidation.bind(this);
        this.addListeners = this.addListeners.bind(this);
        this.removeListeners = this.removeListeners.bind(this);
    }

    showRegForm() {
        this.formId.style.display = 'block';
        setTimeout(() => { this.formId.classList.add(this.showFormClass); }, 100);
    }

    registration({ firstName, lastName, email }) {
        const allPlayers = Storage[Players] ? JSON.parse(Storage[Players]) : [];
        const oldPlayer = allPlayers.filter(p => {
            if (p) {
                return p.email === email;
            }
            return p;
        })[0];
        let newPlayer;
        if (!oldPlayer) {
            newPlayer = new Player({ firstName, lastName, email });
            allPlayers.push(newPlayer.getProperties());
            Storage.setItem(Players, JSON.stringify(allPlayers));
        } else
            newPlayer = new Player(oldPlayer);
        this.closeForm();
        game.gameInit(newPlayer);
        return false;
    }

    closeForm() {
        this.formId.classList.remove(this.showFormClass);
        this.formId.style.display = 'none';
    }

    blurValidation(e) {
        e.stopPropagation();
        e.stopPropagation();
        if (e.target.value) {
            if (e.target.id === this.email.id) {
                if (EmailValid.test(e.target.value)) {
                    e.target.setAttribute('class', '');
                    e.target.parentElement.querySelector('.email-error').style.visibility = 'hidden';
                } else {
                    e.target.classList.add('invalid-input');
                    e.target.parentElement.querySelector('.email-error').style.visibility = 'visible';
                }
            } else
                e.target.setAttribute('class', '');
        } else {
            e.target.classList.add('invalid-input');
            e.target.setAttribute('placeholder', 'Please fill this field');
        }
    }

    formSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        const EmailErrorNode = this.email.parentElement.querySelector('.email-error');
        if (this.lastName.value
            && this.firstName.value
            && EmailValid.test(this.email.value)) {
            const email = this.email.value;
            const firstName = this.firstName.value;
            const lastName = this.lastName.value;
            [this.email, this.firstName, this.lastName].forEach((x) => {
                x.classList.remove('invalid-input');
                x.value = '';
            });
            return this.registration({ email, firstName, lastName });
        }

        [this.email, this.firstName, this.lastName].forEach(x => {
            if (!x.value || x.value === ' ') {
                x.value = '';
                x.classList.add('invalid-input');
                x.setAttribute('placeholder', 'Please fill this field');
            }
            if (!EmailValid.test(this.email.value)) {
                this.email.classList.add('invalid-input');
                EmailErrorNode.style.visibility = 'visible';
            } else
                EmailErrorNode.style.visibility = 'hidden';
        });
        return false;
    }

    addListeners() {
        [this.email, this.lastName, this.firstName]
            .forEach(x => { x.addEventListener('blur', this.blurValidation); });
        this.submit.addEventListener('click', this.formSubmit);
    }

    removeListeners() {
        [this.email, this.lastName, this.firstName]
            .forEach(x => { x.removeEventListener('blur', this.blurValidation); });
        this.submit.removeEventListener('click', this.formSubmit);
    }
}

const registrationForm = new RegistrationForm();
export default registrationForm;
