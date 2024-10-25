'use client'

import {CSSProperties, PropsWithChildren, ReactNode} from "react";
import {useModal} from "@/shared/states/useModal";
import {createPortal} from "react-dom";
import styles from './style.module.scss';

/**
 * Backdrop 컴포넌트의 Props
 * @typedef {Object} BackdropProps
 * @property {string} modalId - 모달을 식별하는 고유 ID
 * @property {ReactNode} children - Backdrop 내부에 렌더링될 콘텐츠
 */
interface BackdropProps {
    modalId: string;
    children: ReactNode;
}

/**
 * 모달의 배경을 렌더링하고 모달 닫기를 처리하는 Backdrop 컴포넌트
 * @component
 * @param {BackdropProps} props - Backdrop 컴포넌트에 전달되는 속성들
 */
const Backdrop = ({modalId, children}: BackdropProps) => {
    const {isModalOpen, closeModal} = useModal();

    if (!isModalOpen(modalId)) return null;

    return createPortal(
        <div className={styles.backdrop} onClick={() => closeModal(modalId)}>
            {children}
        </div>,
        document.body
    );
};

/**
 * Modal 컴포넌트의 Props
 * @typedef {Object} ModalProps
 * @property {string} modalId - 모달을 식별하는 고유 ID
 * @property {number} [paddingTop] - 상단 패딩 (픽셀)
 * @property {number} [paddingRight] - 우측 패딩 (픽셀)
 * @property {number} [paddingBottom] - 하단 패딩 (픽셀)
 * @property {number} [paddingLeft] - 좌측 패딩 (픽셀)
 * @property {CSSProperties} [style] - 추가적인 CSS 스타일
 */
interface ModalProps extends PropsWithChildren {
    modalId: string;
    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    style?: CSSProperties;
}

/**
 * 콘텐츠를 모달 창으로 표시하는 Modal 컴포넌트
 * @component
 * @param {ModalProps} props - Modal 컴포넌트에 전달되는 속성들
 */
const Modal = ({
                   modalId,
                   paddingTop,
                   paddingRight,
                   paddingBottom,
                   paddingLeft,
                   children,
                   style
               }: ModalProps) => {
    return (
        <Backdrop modalId={modalId}>
            <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
                style={{
                    paddingTop,
                    paddingRight,
                    paddingBottom,
                    paddingLeft,
                    ...style,
                }}
            >
                {children}
            </div>
        </Backdrop>
    );
};

export default Modal;