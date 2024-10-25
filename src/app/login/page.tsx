'use client';

import useDevice from '@/hooks/useDevice';
import mobile from './mobile.module.scss';
import { GoogleLoginButton } from '@/components/molecules';
import Image from 'next/image';
import logo from '@/assets/logos/logo.svg';

export default function Home() {
	const { isMobile } = useDevice();

	if (isMobile) {
		return (
			<div className={ mobile.container }>
				<div className={ mobile.logoContainer }>
					<Image src={ logo } alt={ 'Logo' } />
					<p>선린 팀빌딩 Mixir</p>
				</div>
				<GoogleLoginButton className={ mobile.googleLoginButton } />
			</div>
		);
	}
}
