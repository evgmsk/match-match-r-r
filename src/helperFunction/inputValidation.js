/**
 * project match-match-r-r
 */

export const validateEmail = email => /^\w+@\w+\.\w{2,3}$/.test(email);

export const validatePassword = password =>
    /\w+(?=[!&^%$#*]+)/g.test(password) && (password.length >= 6);

export const validateName = name => /(\w{2,15})+/.test(name);
