import {ButtonSize, ButtonStyle} from "@/shared/types/button";
import styles from './style.module.scss';
import {cloneElement} from "react";

interface ButtonProps {
    style: ButtonStyle;
    size: ButtonSize;
    children?: React.ReactNode;
    isPending?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({style, size, children, icon, onClick, fullWidth = false}: ButtonProps) => {
    const clonedIcon = icon ? cloneElement(icon as React.ReactElement, {className: styles.icon}) : null;
    return (
        <button
            className={styles.button}
            onClick={onClick}
            data-style={style}
            data-size={size}
            style={{width: fullWidth ? '100%' : 'auto'}}
        >
            {clonedIcon} {children}
        </button>
    )
};

export default Button;