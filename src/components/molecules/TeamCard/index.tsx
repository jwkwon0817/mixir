import styles from './style.module.scss';
import formatDate from "../../../../lib/formatDate";

const SectionNameVaule = ({name, value}: {name: string, value: string}) => {
    return (
        <div className={styles.sectionItem}>
            <span>{name}</span>
            <span>{value}</span>
        </div>
    )
}

interface TeamCardProps {
    subName: string;
    name: string;
    peopleCount: number;
    createAt: Date;
}

const TeamCard = ({subName, name, peopleCount, createAt}: TeamCardProps) => {
    return (
        <article className={styles.container}>
            <div className={styles.titleContainer}>
                <span className={styles.groupName}>{subName}</span>
                <span className={styles.name}>{name}</span>
            </div>
            <section className={styles.section}>
                <SectionNameVaule name={'인원'} value={`${peopleCount}명`} />
                <SectionNameVaule name={'생성일'} value={formatDate(createAt, "YYYY년 MM월 DD일")} />
            </section>
        </article>
    )
}

export default TeamCard;