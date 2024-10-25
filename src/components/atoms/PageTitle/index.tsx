import style from './style.module.scss';
import {ReactNode} from "react";

interface PageTitleProps {
    children: ReactNode;
}

const PageTitle = ({children}: PageTitleProps) => {
    return <h1 className={style.title}>{children}</h1>;
}

export default PageTitle;