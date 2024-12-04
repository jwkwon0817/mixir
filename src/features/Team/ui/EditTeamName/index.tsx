'use client'

import {ChangeEvent, useState} from 'react';
import styles from './style.module.scss';
import {useModal} from "@/shared/states/useModal";
import Modal from "@/components/molecules/Modal";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import {ButtonSize, ButtonStyle} from "@/shared/types/button";

interface EditTeamNameModalProps {
    modalId: string;
    currentName: string;
    onSubmit: (newName: string) => void;
}

export const EditTeamNameModal = ({ modalId, currentName, onSubmit }: EditTeamNameModalProps) => {
    const {closeModal} = useModal()
    const [teamName, setTeamName] = useState(currentName);
    const [error, setError] = useState<string>('');

    const handleSubmit = () => {
        const trimmedName = teamName.trim();

        if (!trimmedName) {
            setError('팀 이름을 입력해주세요.');
            return;
        }

        if (trimmedName === currentName) {
            setError('현재 팀 이름과 동일합니다.');
            return;
        }

        onSubmit(trimmedName);
    };

    return (
        <Modal
            modalId={modalId}
            style={{ width: '400px' }}
            paddingTop={24}
            paddingBottom={24}
            paddingLeft={24}
            paddingRight={24}
        >
            <div className={styles.container}>
                <h2 className={styles.title}>팀 이름 수정</h2>
                <Input
                    label="팀 이름"
                    value={teamName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setTeamName(e.target?.value);
                        setError('');
                    }}
                    error={error}
                    placeholder="팀 이름을 입력해주세요"
                    maxLength={50}
                />
                <div className={styles.buttons}>
                    <Button
                        style={ButtonStyle.Secondary}
                        size={ButtonSize.Medium}
                        onClick={() => closeModal(modalId)}
                    >
                        취소
                    </Button>
                    <Button
                        style={ButtonStyle.Primary}
                        size={ButtonSize.Medium}
                        onClick={handleSubmit}
                    >
                        확인
                    </Button>
                </div>
            </div>
        </Modal>
    );
};