import {Header} from "@/components/molecules";
import MaxWidth from "@/components/atoms/MaxWidth";
import TeamCard from "@/components/molecules/TeamCard";
import styles from '@/styles/app/team/page.module.scss';
import Button from "@/components/atoms/Button";
import {ButtonSize, ButtonStyle} from "@/shared/types/button";
import {IoMdAdd} from "react-icons/io";

const PageTeam = () => {
    return (
        <>
            <Header />
            <MaxWidth>
                <div className={styles.titleContainer}>
                    <h1>팀 빌딩</h1>
                    <Button style={ButtonStyle.Primary} size={ButtonSize.Medium} icon={<IoMdAdd />}>팀 생성</Button>
                </div>
                <section className={styles.list}>
                    <TeamCard name={'수수수은수노바'} createAt={new Date()} peopleCount={32} />
                    <TeamCard name={'한녀찬'} createAt={new Date()} peopleCount={32} />
                    <TeamCard name={'권찌찌'} createAt={new Date()} peopleCount={32} />
                    <TeamCard name={'유두준'} createAt={new Date()} peopleCount={32} />
                    <TeamCard name={'피로'} createAt={new Date()} peopleCount={32} />
                    <TeamCard name={'발도현'} createAt={new Date()} peopleCount={32} />
                </section>
            </MaxWidth>
        </>
    )
}

export default PageTeam;