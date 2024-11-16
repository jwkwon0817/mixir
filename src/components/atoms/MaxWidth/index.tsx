import {ReactNode} from "react";
import defaultStyle from './style.module.scss';

interface MaxWidthProps {
    children: ReactNode;
    style?: React.CSSProperties;
    className?: string;
}

const MaxWidth = ({children, style, className}: MaxWidthProps) => {
    return (
        <div className={`${defaultStyle.container} ${className}`} style={style}>
            {children}
        </div>
    )
}

export default MaxWidth;