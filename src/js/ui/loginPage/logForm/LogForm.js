/**
 * project
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
    validateName,
} from '../../../helperFunction/inputValidation';
import FormFieldset from './inputs/FormFieldset';
import './logForm.scss';

class LogForm extends React.Component {
    constructor(props) {
        super(props);
        this.name = React.createRef();
        this.submit = this.submit.bind(this);
    }
    componentDidUpdate(oldProps) {
        const { player } = this.props;
        if (!player.logFail && player.name !== oldProps.player.name)
            this.props.history.push('/game');
    }
    submit(e) {
        e.preventDefault();
        e.stopPropagation();
        const {
            loginPlayer: login,
            regPlayer: register,
            player: { logFail },
        } = this.props;
        if (logFail) {
            if (logFail.name === this.name.current.value)
                register(logFail);
            else
                login({ name: this.name.current.value, records: {} });
        } else if (validateName(this.name.current.value)) {
            login({ name: this.name.current.value, records: {} });
        }
        this.name.current.value = '';
    }
    render() {
        const { logFail } = this.props.player;
        const inputsProps = [
            {
                className: 'form-fieldset name-fieldset',
                type: 'text',
                label: 'Name',
                placeholder: 'Your name',
                onBlur: validateName,
                ref: this.name,
            },
        ];
        if (logFail && logFail.name) {
            this.name.current.value = logFail.name;
        }
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

export default withRouter(LogForm);

LogForm.propTypes = {
    loginPlayer: PropTypes.func.isRequired,
    regPlayer: PropTypes.func.isRequired,
    history: PropTypes.objectOf(PropTypes.any).isRequired,
    player: PropTypes.objectOf(PropTypes.any).isRequired,
};
