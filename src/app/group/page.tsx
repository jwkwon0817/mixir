import Header from "@/components/molecules/Header";
import GroupListSideBar from "@/features/Group/ui/GroupListSideBar/GroupListSideBar";
import style from '@/styles/app/group/page.module.scss';
import GroupStudentTable from "@/features/Group/ui/GroupStudentTable";

export default function Group() {
    return (
        <>
            <Header />
            <main className={style.container}>
                <GroupListSideBar />
                <GroupStudentTable />
            </main>
        </>
    )
};