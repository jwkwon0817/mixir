'use client';

import style from './style.module.scss';
import SideBarTitle from "@/components/molecules/SideBarTitle";
import { FaLayerGroup } from "react-icons/fa";
import GroupList from "@/features/Group/ui/GroupList/GroupList";

const GroupListSideBar = () => {
    return (
        <aside className={style.container}>
            <section className={style.groupList}>
                {/* 그룹 목록 */}
                <GroupList name={'1학년 4반'} onClick={() => {}} selected={false} />
                <GroupList name={'1학년 3반'} onClick={() => {}} selected={false} />

                <GroupList name={'1학년 5반'} onClick={() => {}} selected={true} />

            </section>
        </aside>
    )
}

export default GroupListSideBar;