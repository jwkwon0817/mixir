import style from './style.module.scss';
import {cloneElement} from "react";

interface SideBarTitleProps {
    name: string;
    color?: string;
    icon?: React.ReactNode;
}

const SideBarTitle: React.FC<SideBarTitleProps> = ({ name, color, icon }) => {
    const cloneIconElement = cloneElement(icon as React.ReactElement, {color: color});
    return (
        <div className={style.container}>
            <div className={style.iconContainer} style={{backgroundColor: `${color}1A`}}>
                {cloneIconElement}
            </div>
            <span className={style.name}>{name}</span>
        </div>
    )
};

export default SideBarTitle;