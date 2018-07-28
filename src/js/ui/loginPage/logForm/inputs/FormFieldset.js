/**
 * project match-match-r-r
 */
import React from 'react';
import './formFieldset.scss';

const NameInput = React.forwardRef((props, ref) => {
    const { className, htmlFor, label, onBlur, ...restProps } = props;
    const validateOnBlur = e => {
        e.stopPropagation();
        const elementClassList = ref.current.parentNode.classList;
        if (!onBlur(ref.current.value)) {
            elementClassList.add('invalid');
        } else
            elementClassList.remove('invalid');
    };
    return (
            <div className={className}>
                <label htmlFor={htmlFor}>{label}</label>
                <input ref={ref} {...restProps} onBlur={validateOnBlur} />
            </div>
        );
});

export default NameInput;
