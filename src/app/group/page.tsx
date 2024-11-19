import Header from "@/components/molecules/Header";
import GroupListSideBar from "@/features/Group/ui/GroupListSideBar/GroupListSideBar";
import style from '@/styles/app/group/page.module.scss';
import GroupStudentTable from "@/features/Group/ui/GroupStudentTable";
import Button from "@/components/atoms/Button";
import {ButtonSize, ButtonStyle} from "@/shared/types/button";
import {IoMdAdd} from "react-icons/io";

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
                            <Button style={ButtonStyle.Primary} size={ButtonSize.Medium} icon={<IoMdAdd />}>학생 추가</Button>
                        </div>
                    </div>
                    <GroupStudentTable />
                </div>
            </main>

        </>
    )
};