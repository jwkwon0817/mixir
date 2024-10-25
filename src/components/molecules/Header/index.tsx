import style from './style.module.scss';
import Image from "next/image";
import Logo from '@/../public/logo.svg';
import SearchBar from "@/components/molecules/SearchBar";
import Link from "next/link";
import SearchModal from "@/components/organisms/SearchModal";


const Header = () => {
    return (
        <>
            <header className={style.header}>
                <Image src={Logo} alt={'서비스 로고'} className={style.logo}/>
                <SearchBar/>
                <Link href={'/developers'} className={style.developers}>개발자</Link>
            </header>
            <SearchModal/>
        </>
    )
}

export default Header;