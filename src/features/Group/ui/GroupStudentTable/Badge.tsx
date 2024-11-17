import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscDash } from "react-icons/vsc";
import styles from './style.module.scss';

type skillType = 'good' | 'bad' | 'normal';

interface TableBadgeProps {
    skill: skillType;
}

function skillToKorean(skill: skillType) {
    switch (skill) {
        case 'good':
            return '좋음';
        case 'bad':
            return '나쁨';
        case 'normal':
            return '보통';
    }
}

function skillToColor(skill: skillType) {
    switch (skill) {
        case 'good':
            return 'green';
        case 'bad':
            return 'red';
        case 'normal':
            return 'gray';
    }
}

function skillIcon(skill: skillType) {
    switch (skill) {
        case 'good':
            return <MdOutlineKeyboardArrowUp color={skillToColor(skill)} size={18} />;
        case 'bad':
            return <MdKeyboardArrowDown color={skillToColor(skill)} size={18} />;
        case 'normal':
            return <VscDash color={skillToColor(skill)} size={18} />;
    }
}

const TableBadge = ({ skill }: TableBadgeProps) => {
    return (
        <div className={`${styles.badge} ${styles[skill]}`}>
            <span className={styles.icon}>{skillIcon(skill)}</span>
            <span className={styles.text}>{skillToKorean(skill)}</span>
        </div>
    );
}

export default TableBadge;