'use client';

import useDevice from '@/hooks/useDevice';
import mobile from './mobile.module.scss';

export default function Home() {
	const { isMobile, isDesktop } = useDevice();

	if (isMobile) {
		return (
			<div className={ mobile.container }>
				test
				<div>
					1234
				</div>
			</div>
		);
	}

	return (
		<>desk</>
	);
}
