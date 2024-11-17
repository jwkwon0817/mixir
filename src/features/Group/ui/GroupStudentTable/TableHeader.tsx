import style from './style.module.scss';

const TableHeader = ({onSelectAll}: {onSelectAll: (checked: boolean) => void}) => {
    return (
        <thead className={style.thead}>
        <tr>
            <th style={{minWidth: 70}} />
            <th style={{minWidth: 70}}>#</th>
            <th style={{minWidth: 80}}>학번</th>
            <th style={{minWidth: 130}}>이름</th>
            <th style={{minWidth: 130}}>배드민턴 수준</th>
        </tr>
        </thead>
    )
}

export default TableHeader;