'use client'

import { useState } from 'react';
import styles from './style.module.scss';

type Option = {
    value: string;
    label: string;
}

interface SegmentControlProps {
    label?: string;
    options: Option[];
    defaultValue?: string;
    fullWidth?: boolean;
    defaultSelect?: boolean;
    onChange?: (value: string) => void;
    style?: React.CSSProperties;
}

const SegmentControl = ({
                            label,
                            options,
                            defaultValue,
                            fullWidth,
                            defaultSelect = true,
                            onChange,
                            style,
                        }: SegmentControlProps) => {
    const [selected, setSelected] = useState(defaultSelect ? (defaultValue || options[0].value) : null);

    const handleSelect = (value: string) => {
        setSelected(value);
        onChange?.(value);
    };

    return (
        <div className={styles.wrap} style={{...style, width: fullWidth ? '100%' : 'fit-width'}}>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.container} style={{width: fullWidth ? '100%' : 'fit-width'}}>
                {options.map((option) => (
                    <button
                        key={option.value}
                        className={styles.option}
                        data-selected={selected === option.value}
                        onClick={() => handleSelect(option.value)}
                        style={{ width: fullWidth ? '100%' : 'auto' }}
                    >
                        <span>{option.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SegmentControl;