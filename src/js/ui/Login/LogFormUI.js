/**
 * project smartWizBattle
 */
import React from 'react';
import { EmailValidation, PasswordValidation } from '../../HelperFunctions/inputValidation';
import initialState from '../../Store/initialState';
import Submit from '../Common/Submit';
import './logForm.scss';

const LogForm = props => {
    const { loginForm, onBlur = f => f, saveHero = f => f, history } = props;
    let email;
    let password;
    let name;
    const submit = e => {
        e.preventDefault();
        e.stopPropagation();
        onBlur({ emailValid: EmailValidation(email.value) });
        onBlur({ passwordValid: PasswordValidation(password.value) });
        if (EmailValidation(email.value) && PasswordValidation(password.value) && name.value) {
            history.replace('/game');
            let Hero = localStorage['redux-store']
                ? JSON.parse(localStorage['redux-store']).hero
                : initialState.hero;
            if (Hero.nickName !== name.value) {
                Hero = initialState.hero;
                Hero.nickName = name.value;
                saveHero(Hero);
            }
            name.value = '';
            email.value = '';
            password.value = '';
        }
    };
    const onBlurInput = e => {
        e.stopPropagation();
        if (e.target.type === 'email') {
            onBlur({ emailValid: EmailValidation(email.value) });
        }

        if (e.target.type === 'password') {
            onBlur({ passwordValid: PasswordValidation(password.value) });
        }
    };

    return (
        <div className={loginForm.showForm ? 'login-wrapper' : 'login-wrapper closed'}>
            <form
                action="login"
                name="reservationForm"
                className="reg-form"
                onSubmit={submit}
                onBlur={onBlurInput}
                noValidate
            >
                <div className="form-fieldset">
                    <label htmlFor="name">Имя</label>
                    <input
                        id="name"
                        type="text"
                        ref={input => name = input}
                        placeholder="Ваше имя"
                    />
                </div>
                <div className={loginForm.emailValid ? 'form-fieldset' : 'form-fieldset invalid'}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        ref={input => email = input}
                        placeholder={loginForm.emailValid ? 'Ваш email *' : 'Невалидный email'}
                    />
                    <span className="invalid-email">Невалидный email</span>
                </div>
                <div className={loginForm.passwordValid ? 'form-fieldset' : 'form-fieldset invalid'}>
                    <label htmlFor="password">Пароль</label>
                    <input
                        id="password"
                        type="password"
                        ref={input => password = input}
                        placeholder={
                            loginForm.passwordValid
                            ? 'Ваш пароль *'
                            : 'Небезопасный пароль'
                        }
                    />
                    {!loginForm.passwordValid
                        ? <span className="invalid-password">Небезопасный пароль. Добавьте спецсимвол</span>
                        : <span className="display-none" />
                    }
                </div>
                <div className="form-fieldset">
                    <Submit value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default LogForm;
