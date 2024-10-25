import style from './RecentStudent.module.scss';
import { FaRegUser } from "react-icons/fa";
import {ReactNode} from "react";
import Link from "next/link";

interface RecentStudentProps {
    name: string;
    grade: number;
    schoolClass: number;
}

const RecentStudent = ({name, grade, schoolClass}: RecentStudentProps) => {
    return (
        <Link href={`/student/${name}`} className={style.container}>
            <div className={style.icon}>
                <FaRegUser />
            </div>
            <div className={style.data}>
                <div className={style.name}>{name}</div>
                <div className={style.class}>{grade}학년 {schoolClass}반</div>
            </div>
        </Link>
    )
}

export default RecentStudent;