import style from './style.module.scss';
import Image from "next/image";
import Logo from '@/../public/logo.svg';
import SearchBar from "@/components/molecules/SearchBar";


const Header = () => {
    return (
        <header className={style.header}>
            <Image src={Logo} alt={'서비스 로고'} className={style.logo} />
            <SearchBar />
        </header>
    )
}

export default Header;