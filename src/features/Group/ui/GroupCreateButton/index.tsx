import { GrFormAdd } from "react-icons/gr";
import style from './style.module.scss';

const GroupCreateButton = ({onClick}: {onClick: () => void}) => {
    return (
        <div className={style.container} onClick={onClick}>
            <div className={style.iconContainer}>
                <GrFormAdd size={18} color={'white'} />
            </div>
            <span>그룹 추가하기</span>
        </div>
    )
};

export default GroupCreateButton;