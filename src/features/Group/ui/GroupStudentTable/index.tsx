'use client';

import style from './style.module.scss';
import TableHeader from "@/features/Group/ui/GroupStudentTable/TableHeader";

const GroupStudentTable = () => {
    return (
        <div className={style.container}>
            <table className={style.table}>
                <TableHeader onSelectAll={() => {}} />
            </table>
        </div>
    )
};

export default GroupStudentTable;