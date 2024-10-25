import style from './RecentStudent.module.scss';
import { FaRegCalendar } from "react-icons/fa";
import Link from "next/link";

interface RecentStudentProps {
    name: string;
    leftScore: number;
    rightScore: number;
}

const RecentGame = ({name, leftScore, rightScore}: RecentStudentProps) => {
    return (
        <Link href={`/student/${name}`} className={style.container}>
            <div className={style.icon}>
                <FaRegCalendar />
            </div>
            <div className={style.data}>
                <div className={style.name}>{name}</div>
                <div className={style.class}>{leftScore} 대 {rightScore}</div>
            </div>
        </Link>
    )
}

export default RecentGame;