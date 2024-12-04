import Header from "@/components/molecules/Header";
import GroupListSideBar from "@/features/Group/ui/GroupListSideBar/GroupListSideBar";
import style from '@/styles/app/group/page.module.scss';
import GroupStudentTable from "@/features/Group/ui/GroupStudentTable";
import AddStudentInGroupModal from "@/features/Group/ui/AddStudentInGroupModal";
import AddStudentButton from "@/features/Group/ui/AddStudentButton";

export default function Group() {
    const GroupName = '1학년 5반';

    return (
        <>
            <Header />
            <main className={style.container}>
                <GroupListSideBar />
                <div className={style.table}>
                    <div className={style.tableHeader}>
                        <h1 className={style.groupName}>{GroupName}</h1>
                        <div className={style.buttonList}>
                            <AddStudentButton />
                        </div>
                    </div>
                    <GroupStudentTable />
                </div>
            </main>
            <AddStudentInGroupModal
                modalId={'addStudentInGroupModal'}
            />
        </>
    )
};