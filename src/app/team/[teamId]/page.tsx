import { Header } from "@/components/molecules";
import MaxWidth from "@/components/atoms/MaxWidth";
import styles from '@/styles/app/team/[teamId]/page.module.scss';
import {BuildGroup} from "@/components/molecules/BuildDraggableGroup/types";
import {TeamBuilderList} from "@/components/molecules/BuildDraggableGroup/teamBuilderList";

const initialGroups: BuildGroup[] = [
    {
        id: '1',
        title: '강성영후',
        items: [
            {
                id: 'student_1_1',
                name: '한녀찬',
                classInfo: {
                    grade: 2,
                    class: 2
                }
            }
        ]
    },
    {
        id: '2',
        title: '하늘을 오르다',
        items: [
            {
                id: 'student_2_1',
                name: '한유찬',
                classInfo: {
                    grade: 3,
                    class: 2
                }
            },
            {
                id: 'student_2_2',
                name: '한유찬',
                classInfo: {
                    grade: 3,
                    class: 2
                }
            }
        ]
    },
    {
        id: '3',
        title: '3팀',
        items: [
            {
                id: 'student_3_1',
                name: '한유찬',
                classInfo: {
                    grade: 3,
                    class: 2
                }
            },
            {
                id: 'student_3_2',
                name: '한유찬',
                classInfo: {
                    grade: 3,
                    class: 2
                }
            }
        ]
    },
];

const PageTeamDetail = () => {
    const teamName = '수수수은수노바';

    return (
        <>
            <Header />
            <MaxWidth style={{ display: 'flex', flexDirection: 'column' }}>
                <h1>{teamName} 팀 빌딩</h1>
                <span className={styles.title}>팀 빌딩 결과</span>
                <TeamBuilderList initialGroups={initialGroups} />
            </MaxWidth>
        </>
    );
};

export default PageTeamDetail;