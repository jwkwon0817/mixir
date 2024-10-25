import style from './PageShorcut.module.scss';
import Link from "next/link";
import {ReactNode} from "react";

interface PageShortcutProps {
    name: string;
    icon: ReactNode;
    href: string;
}

const PageShortcut = ({name, icon, href}: PageShortcutProps) => {
    return (
        <Link href={href} className={style.container}>
            {icon}
            <span className={style.name}>{name}</span>
        </Link>
    )
}

export default PageShortcut;