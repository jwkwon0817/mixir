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
}

const Button: React.FC<ButtonProps> = ({style, size, children, icon, onClick}: ButtonProps) => {
    const clonedIcon = icon ? cloneElement(icon as React.ReactElement, {className: styles.icon}) : null;
    return (
        <button className={styles.button} onClick={onClick} data-style={style} data-size={size}>
            {clonedIcon} {children}
        </button>
    )
};

export default Button;