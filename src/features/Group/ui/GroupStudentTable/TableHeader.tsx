import style from './style.module.scss';

const TableHeader = ({onSelectAll}: {onSelectAll: (checked: boolean) => void}) => {
    return (
        <thead className={style.tr}>
        <tr>
            <th>
                <input type="checkbox" onChange={(e) => onSelectAll(e.target.checked)}/>
            </th>
            <th>#</th>
            <th>학번</th>
            <th>이름</th>
            <th>배드민턴 실력</th>
            <th>Group</th>
        </tr>
        </thead>
    )
}

export default TableHeader;