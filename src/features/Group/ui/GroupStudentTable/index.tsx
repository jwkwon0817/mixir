'use client';

import style from './style.module.scss';
import TableHeader from "@/features/Group/ui/GroupStudentTable/TableHeader";
import TableBadge from "@/features/Group/ui/GroupStudentTable/Badge";

const GroupStudentTable = () => {
    return (
        <div className={style.container}>
            <table className={style.table}>
                <TableHeader onSelectAll={() => {}}/>
                <tbody className={style.tbody}>
                <tr>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>1</td>
                    <td>10417</td>
                    <td>한녀찬</td>
                    <td>
                        <TableBadge skill={'good'} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>1</td>
                    <td>10413</td>
                    <td>강성영후</td>
                    <td>
                        <TableBadge skill={'bad'} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>1</td>
                    <td>10412</td>
                    <td>권찌찌</td>
                    <td>
                        <TableBadge skill={'bad'} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox"/>
                    </td>
                    <td>1</td>
                    <td>10432</td>
                    <td>이태겸</td>
                    <td>
                        <TableBadge skill={'normal'} />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};

export default GroupStudentTable;