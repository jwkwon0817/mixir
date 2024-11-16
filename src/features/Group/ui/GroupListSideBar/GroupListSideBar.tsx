'use client';

import style from './style.module.scss';
import SideBarTitle from "@/components/molecules/SideBarTitle";
import { FaLayerGroup } from "react-icons/fa";
import GroupList from "@/features/Group/ui/GroupList/GroupList";
import GroupCreateButton from "@/features/Group/ui/GroupCreateButton";

const GroupListSideBar = () => {
    return (
        <aside className={style.container}>
            {/* 그룹 목록 타이틀 */}
            <SideBarTitle name={'학생 그룹'} color={'#456FFC'} icon={<FaLayerGroup />} />
            <section className={style.groupList}>
                {/* 그룹 목록 */}
                <GroupList name={'1학년 1반'} onClick={() => {}} selected={false} />
                <GroupList name={'1학년 2반'} onClick={() => {}} selected={false} />
                <GroupList name={'1학년 3반'} onClick={() => {}} selected={false} />
                <GroupList name={'1학년 4반'} onClick={() => {}} selected={false} />
                <GroupList name={'1학년 5반'} onClick={() => {}} selected={true} />
                <GroupList name={'1학년 6반'} onClick={() => {}} selected={false} />

            </section>
            <GroupCreateButton onClick={() => {}} />
        </aside>
    )
}

export default GroupListSideBar;