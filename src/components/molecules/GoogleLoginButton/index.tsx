import styles from './styles.module.scss';
import Image from 'next/image';
import googleIcon from '@/assets/logos/google.svg';

interface GoogleLoginButtonProps {
	className?: string;
}

export default function GoogleLoginButton({ className }: GoogleLoginButtonProps) {
	return (
		<div className={ [ styles.container, className ].join(' ') }>
			<Image src={ googleIcon } alt={ 'Google Icon' } />
			Google로 로그인
		</div>
	);
}
