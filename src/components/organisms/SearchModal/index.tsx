'use client'

import Modal from "@/components/molecules/Modal";
import style from './style.module.scss';
import {IoSearch} from "react-icons/io5";
import {useEffect, useRef} from "react";
import PageShortcut from "@/features/SearchModal/ui/PageShortcut";
import { FaRegUser } from "react-icons/fa";
import RecentStudent from "@/features/SearchModal/ui/RecentStudent";
import RecentGame from "@/features/SearchModal/ui/RecentGame";

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
            <article className={style.content}>
                <section>
                    <h2 className={style.title}>바로 가기</h2>
                    <PageShortcut name={'학생 관리'} icon={<FaRegUser/>} href={'/sex'}/>
                </section>
                <section>
                    <h2 className={style.title}>학생</h2>
                    <RecentStudent name={'아침유찬'} grade={1} schoolClass={4}/>
                    <RecentStudent name={'한녀찬'} grade={1} schoolClass={4}/>
                    <RecentStudent name={'원숭이두찬'} grade={1} schoolClass={4}/>
                </section>
                <section>
                    <h2 className={style.title}>경기</h2>
                    <RecentGame name={'아침유찬 경기'} leftScore={1} rightScore={3}/>
                    <RecentGame name={'한녀찬 경기'} leftScore={1} rightScore={3}/>
                    <RecentGame name={'원숭이두찬 경기'} leftScore={1} rightScore={3}/>
                </section>
            </article>
        </Modal>
    );
}

export default SearchModal;