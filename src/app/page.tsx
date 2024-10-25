'use client';

import useDevice from '@/hooks/useDevice';

export default function Home() {
	const { isMobile, isDesktop } = useDevice();

	return (
		<>
			{
				isMobile && (
					<div>Mobile</div>
				)
			}
			{
				isDesktop && (
					<div>Desktop</div>
				)
			}
		</>
	);
}
