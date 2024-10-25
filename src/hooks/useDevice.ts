// src/hooks/useDevice.ts
'use client';

import { useEffect, useState } from 'react';

const useDevice = () => {
	const [ isMobile, setIsMobile ] = useState(false);

	useEffect(() => {
		// 화면 크기로 판단
		const checkDevice = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		// 초기 체크
		checkDevice();

		// 리사이즈 이벤트에 대응
		window.addEventListener('resize', checkDevice);

		return () => window.removeEventListener('resize', checkDevice);
	}, []);

	return {
		isMobile,
		isDesktop: !isMobile,
	};
};

export default useDevice;
