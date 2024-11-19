'use client'

import { forwardRef, InputHTMLAttributes } from 'react';
import styles from './style.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, label, className, ...props }, ref) => {
        return (
            <div className={styles.inputWrapper}>
                {label && (
                    <label
                        htmlFor={props.id}
                        className={styles.label}
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className={styles.input}
                    data-error={!!error}
                    aria-invalid={!!error}
                    {...props}
                />
                {error && (
                    <p className={styles.errorMessage} role="alert">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;