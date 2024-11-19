import {forwardRef, HTMLAttributes} from 'react';
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { VscDash } from "react-icons/vsc";
import styles from './style.module.scss';
import { StudentLevel } from "@/shared/types/level";

interface TableBadgeProps extends HTMLAttributes<HTMLDivElement>{
    skill: StudentLevel;
}

function skillToKorean(skill: StudentLevel) {
    switch (skill) {
        case StudentLevel.GOOD:
            return '좋음';
        case StudentLevel.BAD:
            return '나쁨';
        case StudentLevel.AVERAGE:
            return '보통';
    }
}

function skillToColor(skill: StudentLevel) {
    switch (skill) {
        case StudentLevel.GOOD:
            return 'green';
        case StudentLevel.BAD:
            return 'red';
        case StudentLevel.AVERAGE:
            return 'gray';
    }
}

function skillIcon(skill: StudentLevel) {
    switch (skill) {
        case StudentLevel.GOOD:
            return <MdOutlineKeyboardArrowUp color={skillToColor(skill)} size={18} />;
        case StudentLevel.BAD:
            return <MdKeyboardArrowDown color={skillToColor(skill)} size={18} />;
        case StudentLevel.AVERAGE:
            return <VscDash color={skillToColor(skill)} size={18} />;
    }
}

const TableBadge = forwardRef<HTMLDivElement, TableBadgeProps>(
    ({ skill, className }, ref) => {
        return (
            <div ref={ref} className={`${styles.badge} ${styles[skill]} ${className}`}>
                <span className={styles.icon}>{skillIcon(skill)}</span>
                <span className={styles.text}>{skillToKorean(skill)}</span>
            </div>
        );
    }
);

TableBadge.displayName = 'TableBadge';

export default TableBadge;