'use client'

import style from './style.module.scss';
import { IoSearch } from "react-icons/io5";
import {useModal} from "@/shared/states/useModal";
import {useEffect} from "react";

const SearchBar = () => {
    const {openModal} = useModal();

    // View의 onClick 이벤트 함수를 변수로 분리
    const onClick = () => openModal('SearchModal');

    useEffect(() => {
        if(window) {
            // 사용자가 '/' 키를 누르면 검색 모달을 열도록 이벤트 리스너 추가
            window.addEventListener('keydown', (e) => {
                if(e.key === '/') {
                    openModal('SearchModal');
                }
            });
        }
    }, [])

    return (
        <div className={style.container} onClick={onClick}>
            <IoSearch className={style.icon}/>
            <div className={style.keyboardKey}>
                /
            </div>
            <span className={style.title}>혹은 여기를 눌러 검색하세요</span>
        </div>
    )
}

export default SearchBar;