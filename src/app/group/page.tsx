import Header from "@/components/molecules/Header";
import GroupListSideBar from "@/features/Group/ui/GroupListSideBar/GroupListSideBar";
import style from '@/styles/app/group/page.module.scss';
import PageTitle from "@/components/atoms/PageTitle";

export default function Group() {
    return (
        <>
            <Header />
            <main className={style.container}>
                <PageTitle>그룹 관리</PageTitle>
                <GroupListSideBar />
            </main>
        </>
    )
};