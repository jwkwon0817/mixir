'use client'

import { forwardRef, useState, useRef, useEffect } from 'react';
import styles from './style.module.scss';

interface Option {
    value: string | number;
    label: string;
}

interface SelectProps {
    options: Option[];
    value?: string | number;
    onChange?: (value: string | number) => void;
    label?: string;
    placeholder?: string;
    error?: string;
    disabled?: boolean;
    fullWidth?: boolean;  // Added fullWidth prop
}

const Select = forwardRef<HTMLDivElement, SelectProps>(({
                                                            options,
                                                            value,
                                                            onChange,
                                                            label,
                                                            placeholder = '선택해주세요',
                                                            error,
                                                            disabled,
                                                            fullWidth
                                                        }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<Option | null>(
        options.find(opt => opt.value === value) || null
    );
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option: Option) => {
        setSelectedOption(option);
        setIsOpen(false);
        onChange?.(option.value);
    };

    return (
        <div
            className={styles.selectWrapper}
            ref={ref}
            style={{ width: fullWidth ? '100%' : 'fit-content' }}
        >
            {label && <label className={styles.label}>{label}</label>}

            <div
                ref={dropdownRef}
                className={styles.select}
                data-error={!!error}
                data-disabled={disabled}
            >
                <button
                    type="button"
                    className={styles.trigger}
                    onClick={() => !disabled && setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-haspopup="listbox"
                >
                    <span>{selectedOption?.label || placeholder}</span>
                    <svg
                        className={styles.arrow}
                        data-open={isOpen}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                    >
                        <path d="M3 6L8 11L13 6"
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="1.5"
                        />
                    </svg>
                </button>

                {isOpen && (
                    <ul
                        className={styles.dropdown}
                        role="listbox"
                    >
                        {options.map((option) => (
                            <li
                                key={option.value}
                                role="option"
                                aria-selected={option.value === selectedOption?.value}
                                onClick={() => handleSelect(option)}
                                className={styles.option}
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {error && (
                <p className={styles.errorMessage} role="alert">
                    {error}
                </p>
            )}
        </div>
    );
});

Select.displayName = 'Select';

export default Select;