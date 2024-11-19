import {Header} from "@/components/molecules";
import MaxWidth from "@/components/atoms/MaxWidth";
import TeamCard from "@/components/molecules/TeamCard";
import styles from '@/styles/app/team/page.module.scss';

const PageTeam = () => {
    return (
        <>
            <Header />
            <MaxWidth>
                <h1>생성된 팀 빌딩</h1>
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