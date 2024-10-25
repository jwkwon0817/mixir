import style from './style.module.scss';
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return (
        <div className={style.container}>
            <IoSearch className={style.icon}/>
            <div className={style.keyboardKey}>
                /
            </div>
            <span className={style.title}>혹은 여기를 눌러 검색하세요</span>
        </div>
    )
}

export default SearchBar;