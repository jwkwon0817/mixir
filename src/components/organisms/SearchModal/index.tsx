'use client'

import Modal from "@/components/molecules/Modal";
import style from './style.module.scss';
import {IoSearch} from "react-icons/io5";
import {useEffect, useRef} from "react";

const SearchModal = () => {
    const InputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        InputRef.current?.focus();
    }, []);

    return (
        <Modal
            modalId={'SearchModal'}
            style={{
                // SearchBar 위치에 맞게 조정
                top: 10,
                transform: 'translateX(-50%)',
                borderRadius: 14,
            }}
        >
            <div className={style.searchBar}>
                <IoSearch className={style.icon}/>
                <input
                    ref={InputRef}
                    className={style.input}
                    placeholder={'검색어를 입력해주세요'}
                />
            </div>
            <section className={style.content}>
                <h2 className={style.title}>바로 가기</h2>
            </section>
        </Modal>
    );
}

export default SearchModal;