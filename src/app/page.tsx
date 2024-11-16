import Header from '@/components/molecules/Header';
import PageTitle from "@/components/atoms/PageTitle";
import MaxWidth from "@/components/atoms/MaxWidth";

export default function Home() {
	return (
		<>
			<Header />
			<MaxWidth style={{marginTop: 40}}>
				<PageTitle>최근 생성된 팀 빌딩</PageTitle>

			</MaxWidth>
		</>
	);
}
