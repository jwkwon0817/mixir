'use client';

import style from './style.module.scss';

interface GroupListProps {
    name: string;
    selected: boolean;
    onClick: () => void;
}

const GroupList = ({name, selected, onClick}: GroupListProps) => {
    return (
        <div className={style.container} onClick={() => {}} data-selected={selected}>
            {name}
        </div>
    )
}

export default GroupList;