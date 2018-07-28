/**
 * project smartWizBattle
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { savePlayer } from '../../../actions/playerActions';
import {
    validateEmail,
    validateName,
    validatePassword,
} from '../../../helperFunction/inputValidation';
import FormFieldset from './inputs/FormFieldset';
import './logForm.scss';

class LogForm extends React.Component {
    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
        this.name = React.createRef();
        this.submit = this.submit.bind(this);
    }
    submit(e) {
        e.preventDefault();
        e.stopPropagation();
        if (validateEmail(this.email.current.value)
            && validatePassword(this.password.current.value)
            && validateName(this.name.current.value)) {
            this.props.history.push('/game');
            this.props.savePlayer(this.name.value, this.email.current.value);
            this.name.current.value = '';
            this.email.current.value = '';
            this.password.current.value = '';
        }
    }
    render() {
        const inputsProps = [
            {
                className: 'form-fieldset name-fieldset',
                type: 'text',
                label: 'Name',
                placeholder: 'Your name',
                onBlur: validateName,
                ref: this.name,
            },
            {
                className: 'form-fieldset email-fieldset',
                type: 'text',
                label: 'Email',
                placeholder: 'Your email *',
                onBlur: validateEmail,
                ref: this.email,
            },
            {
                className: 'form-fieldset password-fieldset',
                type: 'text',
                label: 'Password',
                placeholder: 'Your password',
                onBlur: validatePassword,
                ref: this.password,
            },
        ];
        return (
            <div className="login-wrapper">
                <form
                    name="loginForm"
                    className="reg-form"
                    onSubmit={this.submit}
                    noValidate
                >
                    {inputsProps.map(inputProps => (
                        <FormFieldset {...inputProps} key={inputProps.label} />),
                    )}
                    <div className="form-fieldset">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(connect(
    null,
    { savePlayer },
)(LogForm));

LogForm.propTypes = {
    savePlayer: PropTypes.func.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
};
